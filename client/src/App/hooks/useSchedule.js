import { useServer } from "./useServer";
import axios from "axios";

export const useSchedule = () => {
  const [isLoggedIn, profile] = useServer();

  const schedule = () => {
    return profile.schedule;
  }

  const addSchedule = (entry) => {
    axios
      .post("/schedule/add", entry)
      .catch(e => {
        console.error("Failed to add schedule entry");
      });
  }

  const removeSchedule = (entry) => {
    axios
      .post("/schedule/remove", entry)
      .catch(e => {
        console.error("Failed to remove schedule entry");
      });
  }

  return [schedule, addSchedule, removeSchedule];
}