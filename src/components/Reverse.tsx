import React, { FunctionComponent } from 'react';
import AppForm from './form/AppForm';
import firebase from 'firebase/app';
import 'firebase/database';

type ReverseProps = {
  user: any;
};

const Reverse: FunctionComponent<ReverseProps> = ({
  user
}) => {
  return (
    <>
      <div
        style={{ textAlign: 'center', marginTop: '33px' }}
      >
        <AppForm
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
