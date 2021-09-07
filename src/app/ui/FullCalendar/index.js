
import React,{useState, useRef} from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '../../utils/events'
import styled from 'styled-components'
import Modal from '../../components/Modal/register'


export default function FullCalendarComponent() {
  const [dropdown, setDropdown] = useState("");
  const [data, setData] = useState("")
  const modalRef = useRef(null);

  const state = {
    weekendsVisible: true,
    currentEvents: []

  }

  const WrapperCalendar = styled.div`
    display: flex;
    .full-calendar{
      margin-right: 1vh;
    } 
  `
  
    

  const toggleDropdown = () => {
    //se clicar no botão, modal aparece
    setDropdown("show");
    document.body.addEventListener("click", closeDropdown);
  };

  const closeDropdown = (event) => {
    event.stopPropagation();
    const contain = modalRef.current.contains(event.target);
    if (!!!contain) {
      //se clicar fora do modal, ele DESaparece
      setDropdown("");
      document.body.removeEventListener("click", closeDropdown);
    }
  };
  const handleDateSelect = (selectInfo) => {
    const dateFormat = formatDate(selectInfo.startStr,)
    setData(dateFormat) 
    toggleDropdown()
    // let title = prompt('Please enter a new title for your event')
    // let calendarApi = selectInfo.view.calendar

    // calendarApi.unselect() // clear date selection

    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay
    //   })
    // }
  }
  
    return (
      <WrapperCalendar>
        <Modal data={data} className={dropdown} modalRef={modalRef} />
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
                weekends={state.weekendsVisible}
                initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                select={handleDateSelect}
                // eventContent={renderEventContent} // custom render function
                // eventClick={handleEventClick}
                // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                /* you can update a remote database when these fire:
                eventAdd={function(){}}
                eventChange={function(){}}
                eventRemove={function(){}}
                */
            />
        </div>
            
        <div>
          <div className='demo-app-sidebar-section'>
            <h2>Serviços restante... {state.currentEvents.length}</h2>
            <ul>
              {state.currentEvents.map(renderSidebarEvent)}
            </ul>
          </div>
        </div>
      </WrapperCalendar>
        
    )
  

 

}
 const handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  const handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {locale:'pt-br', year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )
}

