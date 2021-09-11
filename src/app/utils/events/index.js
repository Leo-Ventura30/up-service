let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: '2021-09-11T13:00:00',
    end: '2021-09-12T13:00:00'
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T12:10:00',
    end:  todayStr + 'T13:00:00'
  }
]

export function createEventId() {
  return String(eventGuid++)
}