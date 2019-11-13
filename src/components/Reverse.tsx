import React, { FunctionComponent } from 'react';
import ReverseForm from './ReverseForm';
import firebase from 'firebase/app';
import 'firebase/database';

type ReverseProps = {
  user: firebase.User;
};

const Reverse: FunctionComponent<ReverseProps> = ({
  user
}) => {
  return (
    <>
      <div
        style={{ textAlign: 'center', marginTop: '33px' }}
      >
        <ReverseForm
          onSubmit={({ text }) => {
            firebase
              .database()
              .ref(`users/${user.uid}/text`)
              .push(text);
          }}
        />
      </div>
    </>
  );
};

export default Reverse;
