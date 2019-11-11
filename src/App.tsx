import React, { useState, useEffect } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Hello from './components/Hello';
import Auth from './helpers/Auth';
import Initialize from './helpers/Initialize';

const App: React.FC = () => {
  Initialize.initialize();

  // todo: see here if logged in or not
  // to see which component to send

  // useEffect, await for user,
  // if user, set state to logged in

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      chechkLogin();
    }
  });

  const chechkLogin = async (): Promise<void> => {
    const user = await Auth.getUser();

    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  return <>{isLoggedIn ? <Hello /> : <SignIn />}</>;
};

export default App;
