import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Reverse from './components/Reverse';
import AppBar from './components/AppBar';
import Initialize from './helpers/Initialize';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Typography from '@material-ui/core/Typography';

const App: React.FC = () => {
  const [user, loading] = useAuthState(firebase.auth());

  return (
    <>
      <div
        style={{ textAlign: 'center', marginTop: '33px' }}
      >
        <Typography variant="h5">
          Loading, please wait...
        </Typography>
      </div>
    </>
  );
};

/**
 * {user ? (
        <main>
          <AppBar user={user} />
          <Reverse user={user} />
        </main>
      ) : loading ? (
        <div
          style={{ textAlign: 'center', marginTop: '33px' }}
        >
          <Typography variant="h5">
            Loading, please wait...
          </Typography>
        </div>
      ) : (
        <main>
          <SignIn />
        </main>
      )}
 */

Initialize.initialize();

export default App;
