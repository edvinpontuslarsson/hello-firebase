import React from 'react';
import './App.css';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth';
import SignIn from './components/SignIn';
import Hello from './components/Hello';
import AppBar from './components/AppBar';
import Initialize from './helpers/Initialize';

const App: React.FC = (props: any) => {
  const { user, signOut, signInWithGoogle } = props;

  return (
    <>
      {user ? (
        <div>
          <AppBar signOut={signOut} />
          <Hello />
        </div>
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
