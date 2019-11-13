import firebase, { User } from 'firebase/app';
import 'firebase/auth';

const getUser = (): Promise<firebase.User | null> => {
  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged((user) => {
      resolve(user);
    });
  });
};

const googleSignIn = (): Promise<firebase.User> => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

const anonymousSignIn = (): Promise<User> => {
  return firebase.auth().signInAnonymously();
};

const signOut = (): Promise<void> => {
  return firebase.auth().signOut();
};

export default {
  getUser,
  googleSignIn,
  anonymousSignIn,
  signOut
};
