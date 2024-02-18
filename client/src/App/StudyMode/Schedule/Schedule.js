import React, { useState } from "react";
import { useSchedule } from "../../hooks/useSchedule";
import "./Schedule.css";

export function Schedule() {

  // API calls to server
  const [schedule, addSchedule, removeSchedule] = useSchedule();

  // Store state of input field
  const [className, setClassName] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  const handleAddClass = () => {
    if (className.length === 0 || time.length === 0 || location.length === 0) return;

    addSchedule({
      className: className,
      time: time,
      location: location
    });
    setClassName("");
    setTime("");
    setLocation("");
  };

  const handleDeleteClass = (entry) => {
    removeSchedule(entry);
  };

  return (
    <div id="schedule">
      <h2 id="title">Classes</h2>
      <header>
        <form id="classes-form">
          <input
            type="text"
            name="class-name"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            placeholder="Class Name"
          />
          <input
            type="text"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Time"
          />
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
          <button type="button" id="add-class" onClick={handleAddClass}>
            Add Class
          </button>
        </form>
      </header>
      <main>
        <section className="classes-list">
          <ul id="classes-list">
            {schedule?.map((classItem) => (
              <li>
                {`${classItem.className} - ${classItem.time} - ${classItem.location}`}
                <button onClick={() => handleDeleteClass(classItem)}>Delete</button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
