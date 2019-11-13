import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Reverse from './components/Reverse';
import AppBar from './components/AppBar';
import Initialize from './helpers/Initialize';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const App: React.FC = () => {
  const [user] = useAuthState(firebase.auth());

  return (
    <>
      {user ? (
        <main>
          <AppBar user={user} />
          <Reverse user={user} />
        </main>
      ) : (
        <main>
          <SignIn />
        </main>
      )}
    </>
  );
};

Initialize.initialize();

export default App;
