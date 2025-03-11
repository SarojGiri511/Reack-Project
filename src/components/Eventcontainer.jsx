import React from 'react'
import EventCard from './Eventcard'

function Eventcontainer() {
  const events = [
    {
      id:1,
      title: 'Event 1',
      description: 'This is the description of event 1',
      date: '2021-09-01',
      image: "https://picsum.photos/500"
      
    },
    {
      id:2,
      title: 'Event 2',
      description: 'This is the description of event 2',
      date: '2021-09-02',
      image: "https://picsum.photos/500"
      
    },
    {
      id:3,
      title: 'Event 3',
      description: 'This is the description of event 3',
      date: '2021-09-03',
      image: "https://picsum.photos/500"

    },
    {
      id:4,
      title: 'Event 4',
      description: 'This is the description of event 4',
      date: '2021-09-04',
      image: "https://picsum.photos/500"
    },
    
  ]
  return (
    <div className="container mx-auto px-20 py-10 mt-12">


<h1 className="text-3xl font-bold text-center">Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

export default Eventcontainer