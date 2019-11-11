import firebase from 'firebase/app';
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
 * This function does not catch any errors
 */
const googleSignIn = (): Promise<firebase.User> => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

/**
 * This function does not catch any errors
 */
const anonymousSignIn = (): Promise<any> => {
  return firebase.auth().signInAnonymously();
};

export default {
  getUser,
  googleSignIn,
  anonymousSignIn
};
