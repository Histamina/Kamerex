import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBaNEvgsKfzcSPlX6P2tFZCt0mKdZEwPJg",
    authDomain: "kamerex-app.firebaseapp.com",
    databaseURL: "https://kamerex-app.firebaseio.com",
    projectId: "kamerex-app",
    storageBucket: "kamerex-app.appspot.com",
    messagingSenderId: "949763701675",
    appId: "1:949763701675:web:b341cc881a2cbfa21f70ee"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}
