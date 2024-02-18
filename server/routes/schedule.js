// Schedule router

import express from "express";
import auth0 from 'express-openid-connect';
import { db } from "../db.js";
const { requiresAuth } = auth0;

export const scheduleRouter = express.Router();

scheduleRouter.post('/add', requiresAuth(), async (req, res) => {
  const id = req.oidc.user.sub;
  console.log("Got schedule add request from " + id);

  try {
    const newRecord = req.body;
    const userRef = db.collection("users").doc(id);
    const doc = await userRef.get();
    let schedule = doc.data().schedule;
    schedule.push(newRecord);
    userRef
      .update({
        schedule: schedule
      });
    res.send("Record updated");
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

scheduleRouter.post('/remove', requiresAuth(), async (req, res) => {
  const id = req.oidc.user.sub;
  console.log("Got schedule remove request from " + id);

  try {
    const entry = req.body;

    const userRef = db.collection("users").doc(id);
    const doc = await userRef.get();
    let schedule = doc.data().schedule;

    let newSched = schedule.filter(otherEntry => 
      otherEntry.className !== entry.className ||
      otherEntry.time !== entry.time ||
      otherEntry.location !== entry.location
    );

    userRef
      .update({
        schedule: newSched
      });
    res.send("Record updated");
  } catch (error) {
    console.error(error);
    res.send(error)
  }
});