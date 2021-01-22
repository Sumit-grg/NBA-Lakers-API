import admin from "firebase-admin";
import serviceAccount from "./serviceAccount.firebase.js";
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
export const firestore = admin.firestore();