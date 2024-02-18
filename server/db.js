
import admin from "firebase-admin";

const { privateKey } = JSON.parse(process.env.SUNDAE_FIRE_SECRET);

const KEY = {
  "type": "service_account",
  "project_id": "sundaee-b2bdb",
  "private_key_id": "9cfacad5915f427948ef1f558a34e416c8c0b760",
  "private_key": privateKey,
  "client_email": "firebase-adminsdk-8vogf@sundaee-b2bdb.iam.gserviceaccount.com",
  "client_id": "108051167607351905482",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-8vogf%40sundaee-b2bdb.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

admin.initializeApp({
  credential: admin.credential.cert(KEY)
});

export const db = admin.firestore();
