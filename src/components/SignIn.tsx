import React, { FunctionComponent } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const SignIn: FunctionComponent = ({}) => {
  const divStyle: object = {
    textAlign: 'center',
    marginTop: '33px'
  };

  return (
    <>
      <div style={divStyle}>
        <Typography variant="h5">
          Welcome! Sign in to reverse text!
        </Typography>
      </div>
      <div style={divStyle}>
        <Button
          onClick={() => {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider);
          }}
        >
          Sign in with Google
        </Button>
      </div>
      <div style={divStyle}>
        <Button
          onClick={() => {
            firebase.auth().signInAnonymously();
          }}
        >
          Sign in anonymously
        </Button>
      </div>
    </>
  );
};

export default SignIn;
