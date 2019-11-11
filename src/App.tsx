import React, { useState, useEffect } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Hello from './components/Hello';
import Auth from './helpers/Auth';
import Initialize from './helpers/Initialize';

const App: React.FC = () => {
  Initialize.initialize();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      chechkLogin();
    }
  });

  const chechkLogin = async (): Promise<void> => {
    const user = await Auth.getUser();
    const isUser: boolean = user !== null;
    setIsLoggedIn(isUser);
  };

  return <>{isLoggedIn ? <Hello /> : <SignIn />}</>;
};

export default App;
