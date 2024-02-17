import express from "express";
import path from "path";
import { AUTH_CONFIG } from "./auth.js";

import auth0 from 'express-openid-connect';
const { auth, requiresAuth } = auth0;

const BUILD = path.resolve("../client/build/");
const PORT = 3000;

const app = express();

app.use(express.static(BUILD));
app.use(auth(AUTH_CONFIG));

app.get("/profile", (req, res) => {
  console.log("Got request to get profile");
  if (req.oidc.isAuthenticated()) {
    console.log("Is authenticated");
    res.send(JSON.stringify(req.oidc.user));
  } else {
    console.log("Is not authenticated");
    res.send(null);
  }
});

app.get("/api", requiresAuth(), (req, res) => {
  console.log("Got API Request " + req);
});

app.listen(PORT, () => {
  console.log(`Sundae listening on ${PORT}`);
});
