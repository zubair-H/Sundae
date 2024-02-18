import { useState, useEffect } from "react";
import { useServer } from "./useServer";
import ENDPOINT from "./endpoint";
import axios from "axios";

export const useSchedule = () => {
  const [isLoggedIn, profile] = useServer();
  const [schedule, _setSchedule] = useState([]);

  const addSchedule = (entry) => {

    console.log("Adding to schedule " + JSON.stringify(entry));

    // Update schedule locally
    let newSched = schedule;
    newSched.push(entry);
    _setSchedule(newSched);

    axios
      .post(ENDPOINT + "/schedule/add", entry)
      .catch(e => {
        console.error("Failed to add schedule entry");
      });
  }

  const removeSchedule = (entry) => {

    // Update schedule locally
    let newSched = schedule.filter(otherEntry => 
      otherEntry.className !== entry.className ||
      otherEntry.time !== entry.time ||
      otherEntry.location !== entry.location
    );
    _setSchedule(newSched);

    axios
      .post(ENDPOINT + "/schedule/remove", entry)
      .catch(e => {
        console.error("Failed to remove schedule entry");
      });
  }

  // Update local schedule whenever profile changes
  const _updateSchedule = () => {
    if (profile !== null) {
      _setSchedule(profile.schedule);
      console.log("Updated schedule to " + JSON.stringify(profile.schedule));
    }
  }
  useEffect(_updateSchedule, [profile]);

  return [schedule, addSchedule, removeSchedule];
}