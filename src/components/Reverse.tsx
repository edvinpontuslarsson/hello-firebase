import React, { FunctionComponent, useState } from 'react';
import ReverseForm from './ReverseForm';
import firebase from 'firebase/app';
import 'firebase/database';
import { useListVals } from 'react-firebase-hooks/database';

type ReverseProps = {
  user: firebase.User;
};

const Reverse: FunctionComponent<ReverseProps> = ({
  user
}) => {
  const dbTextsPath = `users/${user.uid}/texts`;
  const dbRef = firebase.database().ref(dbTextsPath);

  /*
  dbRef.on('value', (snapshot) => {
    const textData = snapshot!.val();
    // console.log(Object.values(textData));
    setTexts(Object.values(textData));
  });
  */

  const [stuff] = useListVals(dbRef);

  return (
    <>
      <div
        style={{ textAlign: 'center', marginTop: '33px' }}
      >
        <ReverseForm
          onSubmit={({ text }) => {
            dbRef.push({ content: text });
          }}
        />
        {console.log(stuff)}
      </div>
    </>
  );
};

export default Reverse;
