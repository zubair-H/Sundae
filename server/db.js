
import admin from "firebase-admin";
import { KEY } from "./key.js";

admin.initializeApp({
  credential: admin.credential.cert(KEY)
});

export const db = admin.firestore();
