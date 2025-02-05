import React from "react";
import presidentImg from "/src/assets/president.jpg";
import meImg from "/src/assets/me.jpg";
import mohitImg from "/src/assets/mohit.jpg";
import lavanyaImg from "/src/assets/lavanya.jpg";
import kashishImg from "/src/assets/kashish.jpg";
import designImg from "/src/assets/design.jpg";

const teamMembers = [
  { name: "Ayush Kaushik", role: "President", img: presidentImg },
  { name: "Ronit Mathur", role: "Vice-President", img: meImg },
  { name: "Mohit Kumar", role: "Web-Dev Head", img: mohitImg },
  { name: "Lavanya Sharma", role: "Event Management Head", img: lavanyaImg },
  { name: "Kashish Sharma", role: "Cyber & Emerging Tech Head", img: kashishImg },
  { name: "Herdya", role: "Design Head", img: designImg },
];

const TeamSection = () => {
  return (
    <>
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Our team is a passionate group of like-minded individuals dedicated to
            fostering a culture of innovation and learning. Together, we work on
            exciting projects, share knowledge, and empower each other to make an
            impact in the tech community.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={member.img}
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">{member.name}</h2>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        <section className="text-gray-400 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-500 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              Engineering is not just about building machines; it's about creating solutions that shape the world. Coding is the language that brings these solutions to life, turning imagination into reality. In college communities, we come together to ignite that spark of creativity, fuel it with collaboration, and transform our dreams into tangible achievements. Every line of code we write, every problem we solve, and every challenge we face not only pushes us to grow but also strengthens the bonds that define our collective journey. Here, we don't just learn—together, we build the future.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-teal-500 mt-8 mb-6"></span>
            <h2 className="text-white font-medium title-font tracking-wider text-sm">
              Team GeekRoom
            </h2>
          </div>
        </div>
      </section>
      </>
  );
};

export default TeamSection;
