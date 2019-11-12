import React, { FunctionComponent } from 'react';

type SignInProps = {
  signInWithGoogle: any;
};

const SignIn: FunctionComponent<SignInProps> = ({
  signInWithGoogle
}) => {
  return (
    <>
      <p>
        <button onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </p>

      <button>Sign out</button>
    </>
  );
};

export default SignIn;
