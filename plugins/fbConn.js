import firebase from '@firebase/app';
import '@firebase/database'
import '@firebase/storage'

const config = {
    apiKey: "AIzaSyBqqizAIlO1cMBgi3l7MiweH5V4gy9zCdc",
    authDomain: "postechproject.firebaseapp.com",
    databaseURL: "https://postechproject.firebaseio.com",
    projectId: "postechproject",
    storageBucket: "postechproject.appspot.com",
    messagingSenderId: "344655296032"
}

// var fbDatabase, fbStorage

if (!firebase.apps.length) {
    firebase.initializeApp(config)
    // fbDatabase = firebase.database()
    // fbStorage = firebase.storage()
}
// !firebase.apps.length ? firebase.initializeApp(config) : ''

// // Export the database for components to use.
// // If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const database = firebase.database() //fbDatabase
export const storage = firebase.storage()