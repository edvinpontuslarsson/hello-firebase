import firebase from 'firebase/app';

/**
 * Initializes firebase app
 */
const initialize = (): void => {
  firebase.initializeApp({
    apiKey: 'AIzaSyDZHP8OEsR0mL-6fmvBtgZSNDlJ-qOfpEA',
    authDomain: 'hello-firebase-edvin.firebaseapp.com',
    databaseURL:
      'https://hello-firebase-edvin.firebaseio.com',
    projectId: 'hello-firebase-edvin',
    storageBucket: 'hello-firebase-edvin.appspot.com',
    messagingSenderId: '1003924121452',
    appId: '1:1003924121452:web:c01fdd303ba2f26103b549',
    measurementId: 'G-YKW3QT8JJ3'
  });
};

export default { initialize };
