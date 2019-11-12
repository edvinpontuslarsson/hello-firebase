import React, { FunctionComponent } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';

type SignInProps = {
  signInWithGoogle: any;
};

const SignIn: FunctionComponent<SignInProps> = ({
  signInWithGoogle
}) => {
  return (
    <>
      <p style={{ textAlign: 'center' }}>
        <button onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </p>

      <p style={{ textAlign: 'center' }}>
        <button
          onClick={() => {
            firebase.auth().signInAnonymously();
          }}
        >
          Sign in anonymously
        </button>
      </p>
    </>
  );
};

export default SignIn;
