const admin = require('firebase-admin');
const serviceAccount = require('./api-login-register-92735-firebase-adminsdk-d537a-19d0db3027.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const auth = admin.auth();
const db = admin.firestore();

module.exports = {auth, db};