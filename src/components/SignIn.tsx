import React, { FunctionComponent } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

type SignInProps = {
  signInWithGoogle: any;
};

const SignIn: FunctionComponent<SignInProps> = ({
  signInWithGoogle
}) => {
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
        <Button onClick={signInWithGoogle}>
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
