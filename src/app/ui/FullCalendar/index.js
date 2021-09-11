
import React,{useState, useRef} from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '../../utils/events'
import styled from 'styled-components'
import { Modal } from '../../components/Modal/register'

const WrapperCalendar = styled.div`
  display: flex;
  .full-calendar{
    margin-right: 2vh;
  }
`

export default class FullCalendarComponent extends React.Component {
  state = {
    title: String(),
    description: String(),
    service: String(),
    value: Number(),
    selectInfo: Object(),
    selectDate:{
      startDate: String(),
      endDate: String(),
    },
    currentEvents: Array(),
    weekendsVisible: true,
    defaultOptions:{locale:'pt-br', year: 'numeric', month: 'numeric', day: 'numeric',  hour:'numeric', minute:'numeric'},
    dropdown: '',
  }

  toggleDropdown = (selectInfo) => {
    this.setState({dropdown:''})
    this.setState({
      selectInfo,
      selectDate: {
        startDate: this.handleFormatDate(selectInfo.startStr, selectInfo.allDay),
        endDate: this.handleFormatDate(selectInfo.endStr, selectInfo.allDay),
      }
    })
    this.setState({ dropdown: 'show' })
  };

  closeDropdown = () => {
    this.setState({dropdown:''})
  };
  
  render(){
    return (
      <WrapperCalendar>
        {
          this.state.dropdown &&
          <Modal
            selectDate={this.state.selectDate}
            onCloseModal={this.closeDropdown}
            onChange={this.handleToChange}
            className={this.state.dropdown}
            onSubmitAppoitment={this.handleDateSelect}
          />
        }
        <div className={'full-calendar'}>
          <FullCalendar
                height={'90vh'}
                aspectRatio={0.5}
                locale={'pt-br'}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                  left: 'prev,today,next',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                allDayText='Dia todo'
                buttonText={{
                  today: 'Hoje',
                  month: 'Mês',
                  week: 'Semana',
                  day: 'Hoje',
                  list: 'Lista'
                }}
                initialView='timeGridWeek'
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={this.state.weekendsVisible}
                initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                select={this.toggleDropdown}
                eventChange={this.handleUpdateEvent} 
                // eventContent={this.renderEventContent} // custom render function
                eventClick={this.handleEventClick}
                eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                /* you can update a remote database when these fire:
                eventAdd={function(){}}
                eventChange={function(){}}
                eventRemove={function(){}}
                */
            />
        </div>
            
        <div>
            <h2>Serviços restante este mês - {this.state.currentEvents.length}</h2>
            <ul>
              {this.state.currentEvents.map(this.renderSidebarEvent).sort((a,b)=> new Date(a.date)- new Date(b.date))}
            </ul>
        </div>
      </WrapperCalendar>
        
    )}
  
  handleUpdateEvent = (changeInfo) => {
    if (!window.confirm(`Deseja atualizar o serviço ${changeInfo.event.title} para o dia ${this.handleFormatDate(changeInfo.event.startStr)}?`)) {
      changeInfo.revert()
    } else {
      alert(`Serviço ${changeInfo.event.title} atualizado para o dia ${this.handleFormatDate(changeInfo.event.startStr)}`)
    }
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }
  
  handleEventClick = (clickInfo) => {
    if (window.confirm(`Deseja mesmo deletar o serviço ${clickInfo.event.title} no dia ${this.handleFormatDate(clickInfo.event.startStr)}?`)) {
      clickInfo.event.remove()
    }
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

  handleDateSelect = (event) => {
    event.preventDefault();
    if (this.state.title) {
      this.addDateSelect(this.state.selectInfo.view.calendar)
      this.closeDropdown()
    } else {
      alert('insira um titulo!')
    }
  }

  addDateSelect = (calendarApi) => {
    calendarApi.addEvent({
        id: createEventId(),
        title:this.state.title,
        start: this.state.selectInfo.startStr,
        end: this.state.selectInfo.endStr,
        allDay: this.state.selectInfo.allDay
      })
  }

  renderSidebarEvent = (event) => {
    return (
      <li key={event.id}>
        <b>{this.handleFormatDate(event.start, event.allDay).replace('/'+event.start.getFullYear(), '')} - {this.handleCompareDate(event.start, event.end).replace('/'+event.start.getFullYear(), '')} </b>
        <i>{event.title}</i>
      </li>
    )
  }

  renderEventContent = (eventInfo)=>{
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  handleCompareDate = (start, end) => {
    if (end) {
      if (start.getDay() === end.getDay()) {
        return (end.getMinutes().length<=4 ?(end.getHours()+':'+end.getMinutes()+'0'):(end.getHours()+':'+end.getMinutes()))
      } else {
        return this.handleFormatDate(end)
      }
    }
    return ''
  }

  handleFormatDate = (date, allDay, event) => {
    if(allDay) return formatDate(date, this.state.defaultOptions).split(" ")[0]
    return formatDate(date, this.state.defaultOptions)
  }

  handleToChange = {
    handleChangeTitle : (title) => {
      this.setState({ title })
    },

    handleChangeDescription : (description) => {
      this.setState({ description })
    },

    handleChangeService : (service) => {
      this.setState({ service })
    },

    handleChangeValue : (value) => {
      this.setState({ value })
    }
  }
}
 


 

