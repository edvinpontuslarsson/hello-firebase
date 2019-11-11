import * as firebase from 'firebase/app';
import 'firebase/auth';

/**
 * If null, the user is not signed in
 */
const getUser = (): Promise<firebase.User | null> => {
  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged((user) => {
      resolve(user);
    });
  });
};

/**
 * Does not catch any errors
 */
const googleSignIn = (): Promise<firebase.User> => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export default {
  getUser,
  googleSignIn
};
