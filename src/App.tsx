import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Hello from './components/Hello';
import Initialize from './helpers/Initialize';

const App: React.FC = () => {
  Initialize.initialize();
}; //

export default App;
