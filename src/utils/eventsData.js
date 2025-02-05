import event1img from "../assets/event1.jpg";
import event2img from "../assets/event2.jpg";
import event3img from "../assets/event3.jpg";

const eventsData = [
  {
    type: "ORIENTATION",
    title: "GeekVeek",
    date: "29th January 2025",
    venue: "JIMS Auditorium",
    time: "10:00 AM",
    description: "Akshay, a core team member, will introduce GeekRoom and deliver a lecture on DevOps.",
    hoverText: "Join us for an exciting orientation! Get introduced to GeekRoom and learn about DevOps from Akshay.",
    image: event1img
  },
  {
    type: "WORKSHOP",
    title: "Robotics Workshop",
    date: "29th January 2025",
    venue: "JIMS Auditorium",
    time: "11:00 AM",
    description: "Piyush Jain will showcase 9-10 robots and provide insights into robotics development.",
    hoverText: "Witness robotics in action! Join Piyush Jain to see 9-10 robots and explore cutting-edge technologies.",
    image: event2img, // ✅ Correct way
  },
  {
    type: "COMING SOON",
    title: "Stay Tuned!",
    date: "TBA",
    venue: "TBA",
    time: "TBA",
    description: "More amazing events are in the pipeline. Keep watching this space for updates!",
    hoverText: "Exciting events are coming soon. Stay tuned for announcements and updates!",
    image: event3img, // ✅ Correct way
  },
  {
    type: "COMING SOON",
    title: "Stay Tuned!",
    date: "TBA",
    venue: "TBA",
    time: "TBA",
    description: "More amazing events are in the pipeline. Keep watching this space for updates!",
    hoverText: "Exciting events are coming soon. Stay tuned for announcements and updates!",
    image: event3img, // This causes `null` images, remove it or use a default placeholder
  },
];

export default eventsData;
