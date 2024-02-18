// Schedule router

import express from "express";
export const router = express.Router();

router.get('/add', requiresAuth(), async (req, res) => {
  const id = req.oidc.sub;
  console.log("Got schedule add request from " + id);

  try{
    const newRecord = req.body;
    const userRef = db.collection("users").doc(id);
    let schedule = await userRef.get().data().schedule;
    schedule.add(newRecord);
    userRef
      .update({
          schedule: schedule
      });
    res.send("Record updated");
  }catch(error){
      res.send(error)
  }
});

router.get('/remove', requiresAuth(), async (req, res) => {
  const id = req.oidc.sub;
  console.log("Got schedule remove request from " + id);

  try{
    const targetRecord = req.body;
    const userRef = db.collection("users").doc(id);
    let schedule = await userRef.get().data().schedule;
    schedule.remove(targetRecord);
    userRef
      .update({
          schedule: schedule
      });
    res.send("Record updated");
  }catch(error){
      res.send(error)
  }
});