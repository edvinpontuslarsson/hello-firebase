import React from 'react';
import './App.css';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth';
import SignIn from './components/SignIn';
import Hello from './components/Hello';
import Initialize from './helpers/Initialize';

const App: React.FC = (props: any) => {
  //TODO: add more sign in options
  const { user, signOut, signInWithGoogle } = props;

  // TODO: have app bar here, w sign out if in
  // send in sign in stuff as props to Sign in
  return (
    <>
      {user ? (
        <Hello />
      ) : (
        <SignIn signInWithGoogle={signInWithGoogle} />
      )}
    </>
  );
};

Initialize.initialize();

const firebaseAppAuth = firebase.auth();

/**
 * providers for signing in
 */
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
