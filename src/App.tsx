import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Reverse from './components/Reverse';
import AppBar from './components/AppBar';
import Initialize from './helpers/Initialize';
import { getUser } from './helpers/Auth';

const App: React.FC = () => {
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

export default App;
