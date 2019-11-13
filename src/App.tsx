import React from 'react';
import './App.css';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth';
import SignIn from './components/SignIn';
import Reverse from './components/Reverse';
import AppBar from './components/AppBar';
import Initialize from './helpers/Initialize';

const App: React.FC = (props: any) => {
  const { user, signOut, signInWithGoogle } = props;

  return (
    <>
      {user ? (
        <main>
          <AppBar user={user} signOut={signOut} />
          <Reverse user={user} />
        </main>
      ) : (
        <main>
          <SignIn signInWithGoogle={signInWithGoogle} />
        </main>
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
