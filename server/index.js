import express from "express";
import path from "path";
import { db } from "./db.js";
import { AUTH_CONFIG } from "./auth.js";

import { scheduleRouter } from "./routes/schedule.js";

import auth0 from 'express-openid-connect';
const { auth, requiresAuth } = auth0;

const BUILD = path.resolve("../client/build/");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.static(BUILD));
app.use(auth(AUTH_CONFIG));
app.use("/schedule", scheduleRouter);

app.get("/profile", async (req, res) => {

  console.log("Got request to get profile");

  if (!req.oidc.isAuthenticated()) {
    res.send("");
    return;
  }

  const id = req.oidc.user.sub;

  const userRef = db.collection("users").doc(id);
  let response = await userRef.get();

  if (response.exists) {

    console.log("Getting existing user record");
    res.send(response.data());

    return;
  }

  console.log("Creating new user record");

  const userJson = {
    email: req.oidc.user.email || '',
    firstName: req.oidc.user.given_name || '',
    lastName: req.oidc.user.family_name || '',
    schedule: []
  };

  console.log(id);
  console.log(userJson);
  response = await db.collection("users").doc(id).set(userJson); //defined id
  res.send(userJson);
});

app.get('/')

/*app.post('/create', async (req, res) => {
  try {
      console.log(req.body);
      const id = req.oidc.sub;
      console.log("ID is " + id);
      const userJson = {
          email: req.body.email,
          firstName: req.body.firstName,
          lastName: req.body.lastName
      };
      //const response = await db.collection("users").add(userJson); //auto gen id
      const response = await db.collection("users").doc(id).set(userJson); //defined id
      res.send(response);
  } catch(error){
      res.send(error);
  }
});*/

/*app.get('/read/all', async (req, res) => {
  try {
      const usersRef = db.collection("users");
      const response = await usersRef.get();
      let responseArr = [];
      response.forEach(doc =>{
          responseArr.push(doc.data());
      })
      res.send(responseArr);
      
  }catch(error){
      res.send(error);
  }
});*/

/*app.get('/read/:id', async (req, res) => {
  try {
      const userRef = db.collection("users").doc(req.params.id);
      const response = await userRef.get();
      res.send(response.data());
  }catch(error){
      res.send(error);
  }
});*/

/*app.get('/read', async (req, res) => {

  if (!req.oidc.isAuthenticated()) {
    res.send("");
    return;
  }

  const id = req.oidc.sub;
  console.log("Got read request from " + id);

  try {
    const userRef = db.collection("users").doc(id);
    const response = await userRef.get();
    if (response == null) {
      res.send("");
    } else {
      res.send(response.data());
    }
  } catch(error){
    res.send(error);
  }
});*/

/*app.post('/update', async(req, res) => {
  const id = req.oidc.sub;
  console.log("Got update request from " + id);

  try{
      const newFirstName = "hello world!"; //Example
      const userRef = await db.collection("users").doc(id)
        .update({
            firstName: newFirstName
        });
      res.send("Record updated");
  }catch(error){
      res.send(error)
  }
});*/

/*app.delete('/delete/:id', async(req, res) =>{
  try{
      const response = await db.collection("users").doc(req.params.id).delete();
      res.send(response);
  }catch(error){
      res.send(error)
  }
});*/

app.listen(PORT, () => {
  console.log(`Sundae listening on ${PORT}`);
});
