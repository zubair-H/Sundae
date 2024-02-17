import axios from "axios";
import { useState, useEffect } from "react";

const ENDPOINT = "http://localhost:3000";

export const useServer = () => {
  const [isLoggedIn, _setIsLoggedIn] = useState(false);
  const [profile, _setProfile] = useState(null);

  const _getProfile = () => {
    axios
      .get(ENDPOINT + "/profile")
      .then(res => {
        console.log("Got profile");
        _setIsLoggedIn(res.data !== "");
        _setProfile(res.data);
      })
      .catch(e => {
        console.error("Failed to retrieve profile");
      });
  }

  useEffect(_getProfile, []);

  return [isLoggedIn, profile];
}