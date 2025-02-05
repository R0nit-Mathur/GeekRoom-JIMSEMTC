import React from "react";

const AboutGeekRoom = () => {
  return (
    <section id="about" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Who Are We?
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            GeekRoom-JIMSEMTC is a college chapter of <a href="https://www.geekroom.in" target="_blank" rel="noopener noreferrer" className="text-teal-400 underline">
              GeekRoom
            </a>, a thriving tech community with over 25,000 coders nationwide.
            We aim to foster a strong tech culture by organizing workshops, hackathons, and collaborative projects that inspire learning and innovation.
            As part of GeekRoom, we provide students with resources, mentorship, and opportunities to excel in technology.
          </p>
        </div>
        <div className="flex flex-wrap">
          {[ 
            {
              title: "Nationwide Network",
              description:
                "By being part of GeekRoom-JIMSEMTC, you join a network of tech enthusiasts spanning colleges across the country. Connect, share ideas, and grow together.",
            },
            {
              title: "Workshops & Hackathons",
              description:
                "Attend hands-on workshops and participate in hackathons to build your skills and tackle real-world problems with innovative solutions.",
            },
            {
              title: "Mentorship",
              description:
                "Gain access to experienced mentors who can guide you in building projects, preparing for interviews, and excelling in your tech journey.",
            },
            {
              title: "Collaboration",
              description:
                "Collaborate with peers on cutting-edge projects, and collectively make a significant and lasting impact within the dynamic tech landscape.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800"
            >
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                {item.title}
              </h2>
              <p className="leading-relaxed text-base mb-4">{item.description}</p>
              <a className="text-teal-400 inline-flex items-center" href="#">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
        <button className="flex mx-auto mt-16 text-white bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg">
          Join Us
        </button>
      </div>
    </section>
  );
};

export default AboutGeekRoom;