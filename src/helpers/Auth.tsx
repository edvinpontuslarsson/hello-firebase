import firebase, { User } from 'firebase/app';
import 'firebase/auth';

export const getUser = (): Promise<firebase.User | null> => {
  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged((user) => {
      resolve(user);
    });
  });
};

export const googleSignIn = (): Promise<firebase.User> => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const anonymousSignIn = (): Promise<User> => {
  return firebase.auth().signInAnonymously();
};

export const signOut = (): Promise<void> => {
  return firebase.auth().signOut();
};
