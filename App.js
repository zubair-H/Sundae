import React, { useState, useEffect } from "react";
import './schedule.css';

export function Schedule() {
    const [classes, setClasses] = useState([]);
    const [className, setClassName] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
        // Load existing classes from localStorage on page load
        loadClasses();
    }, []);

    const loadClasses = () => {
        const savedClasses = JSON.parse(localStorage.getItem("classes")) || [];
        setClasses(savedClasses);
    };

    const saveClasses = () => {
        localStorage.setItem("classes", JSON.stringify(classes));
    };

    const handleAddClass = () => {
        // Validate input
        if (className && time && location) {
            // Create a new class object
            const newClass = { className, time, location };

            // Update the classes state with the new class
            setClasses([...classes, newClass]);

            // Save classes to localStorage
            saveClasses();

            // Clear input fields
            setClassName("");
            setTime("");
            setLocation("");
        } else {
            alert("Please fill in all the fields.");
        }
    };

    const handleDeleteClass = (index) => {
        // Remove the clicked item from the classes list
        const updatedClasses = [...classes];
        updatedClasses.splice(index, 1);
        setClasses(updatedClasses);

        // Save classes to localStorage
        saveClasses();
    };

    return (
        <div id="section3">
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
                        {classes.map((classItem, index) => (
                            <li key={index}>
                                {`${classItem.className} - ${classItem.time} - ${classItem.location}`}
                                <button onClick={() => handleDeleteClass(index)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}
