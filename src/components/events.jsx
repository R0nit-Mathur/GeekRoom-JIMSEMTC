import { useState, useEffect } from "react";
import EventCard from "./eventCard";
import eventsData from "../utils/eventsData";
import React from "react";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  return (
    <section id="events" className="text-gray-400 body-font bg-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Events @GeekRoom
            </h1>
            <div className="h-1 w-20 bg-teal-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
            Discover and participate in GeekRoom's inspiring events. From tech
            orientations to hands-on workshops, we bring you learning,
            innovation, and collaboration.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
