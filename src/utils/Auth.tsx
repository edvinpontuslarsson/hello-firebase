import * as firebase from 'firebase/app';
import 'firebase/auth';

const googleSignIn = (): Promise<any> => {
  const provider: firebase.auth.GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

const isSignedIn = (): Promise<firebase.User | null> => {
  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged((user) => {
      resolve(user);
    });
  });
};

export default {
  googleSignIn
};
