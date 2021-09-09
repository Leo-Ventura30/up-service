
import React,{useState, useRef} from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '../../utils/events'
import styled from 'styled-components'
import Modal from '../../components/Modal/register'
const WrapperCalendar = styled.div`
    display: flex;
    .full-calendar{
      margin-right: 2vh;
    }
  `

export default class FullCalendarComponent extends React.Component {

  state = {
    title: String(),
    Description: String(),
    value: Number(),
    selectInfo: Object(),
    currentEvents: Array(),
    weekendsVisible: true,
    defaultOptions:{locale:'pt-br', year: 'numeric', month: 'numeric', day: 'numeric',  hour:'numeric', minute:'numeric'},
    dropdown: '',
    modalRef: null,
  }


  toggleDropdown = (selectInfo) => {
    this.setState({selectInfo})
    this.setState({dropdown:'show'})
    // document.body.addEventListener('click', this.closeDropdown);
  };

  closeDropdown = (event) => {
    event.stopPropagation();
    
      //se clicar fora do modal, ele DESaparece
      this.setState({dropdown:''})
      document.body.removeEventListener('click', this.closeDropdown);
    
  };
  
  
  render(){
    return (
      <WrapperCalendar>
        <Modal onChange={[this.handleChangeTitle, this.handleChangeDescription]} name={this.state.name} modalRef={this.state.modalRef} className={this.state.dropdown} addEvent={this.handleDateSelect}  />
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
                // eventChange={this.handleUpdateEvent} 
            
                eventContent={this.renderEventContent} // custom render function
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
            <h2>Serviços restante {this.state.currentEvents.length}</h2>
            <ul>
              {this.state.currentEvents.map(this.renderSidebarEvent)}
            </ul>
        </div>
      </WrapperCalendar>
        
    )}

  handleUpdateEvent = (clickInfo) => {
    if (window.confirm(`Deseja atualizar o evento ${clickInfo.event.title}?`)) {
      
    }
    return false;
  }

  handleChangeTitle = (title) => {
    console.log(title)
    this.setState({title})
  }
  handleChangeDescription = (description) => {
    console.log(description)

    this.setState({description})
  }
  handleChangeName = (name) => {
    this.setState({name})
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }
  
  handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
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
    let calendarApi = this.state.selectInfo.view.calendar
   
    calendarApi.unselect() // clear date selection
    if (this.state.title) {
      calendarApi.addEvent({
        id: createEventId(),
        title:this.state.title,
        start: this.state.selectInfo.startStr,
        end: this.state.selectInfo.endStr,
        allDay: this.state.selectInfo.allDay
      })
    } else {
      alert('insira um titulo!')
    }
  }
  renderSidebarEvent = (event) => {
    return (
      <li key={event.id}>
        <b>{formatDate(event.start, this.state.defaultOptions)}</b>
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

}
 


 

