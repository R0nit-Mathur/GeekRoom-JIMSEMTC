import React from "react";

const EventCard = ({ event }) => {
    
  return (
    <div className="xl:w-1/4 md:w-1/2 w-full p-4">
      <div
        className="bg-cover bg-center bg-no-repeat h-96 rounded-lg relative overflow-hidden group"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <div className="absolute bottom-0 w-full bg-gray-800 bg-opacity-60 backdrop-blur-lg p-6 transition-all duration-300 group-hover:opacity-0">
          <h3 className="tracking-widest text-teal-400 text-xs font-medium title-font">{event.type}</h3>
          <h2 className="text-lg text-white font-medium title-font mb-2">{event.title}</h2>
          <p className="text-sm">
            <strong>Date:</strong> {event.date} <br />
            <strong>Venue:</strong> {event.venue} <br />
            <strong>Time:</strong> {event.time} <br />
            <strong>Description:</strong> {event.description}
          </p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-white text-center px-4">{event.hoverText}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;