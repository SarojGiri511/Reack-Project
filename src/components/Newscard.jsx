import React from 'react'

function Newscard({news }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
      
    <h2 className="text-xl font-bold mt-4">{news.title}</h2>
    <p className="text-gray-400 mt-2">{news.description}</p>
    <p className="text-xl font-bold mt-4">${news.price}</p>

  </div>
);
  
}

export default Newscard