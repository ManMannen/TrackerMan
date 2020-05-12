var admin = require("firebase-admin");

var serviceAccount = require("../TrackerMan-8bfbbb8a9c0f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://trackerman-9432f.firebaseio.com"
});

const db = admin.firestore()

module.exports = { db }