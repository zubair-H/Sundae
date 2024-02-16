import { axios } from "axios";
import { useState, useEffect } from "react";

const ENDPOINT = "http://localhost:3000";

export const useServer = () => {
  const [profile, _setProfile] = useState(null);
  const isLoggedIn = () => profile != null;

  const _getProfile = () => {
    axios
      .get(ENDPOINT + "/profile")
      .then(res => {
        _setProfile(res);
      })
      .catch(e => {
        console.error("Failed to retrieve profile");
      });
  }

  useEffect(_getProfile, []);

  return [isLoggedIn, profile];
}