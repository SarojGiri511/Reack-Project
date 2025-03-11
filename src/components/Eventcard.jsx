
function EventCard({event }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
      <img src={event.image} alt="product" className="h-40 w-full object-cover" />
      <h2 className="text-xl font-bold mt-4">{event.title}</h2>
      <p className="text-gray-400 mt-2">{event.description}</p>
      <p className="text-gray-400 mt-2">{event.date}</p>
      

    </div>
  );
}

export default EventCard;