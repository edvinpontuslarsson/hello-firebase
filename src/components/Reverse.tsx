import React, { FunctionComponent } from 'react';
import ReverseForm from './ReverseForm';
import firebase from 'firebase/app';
import 'firebase/database';
import { useListVals } from 'react-firebase-hooks/database';
import Typography from '@material-ui/core/Typography';

type ReverseProps = {
  user: firebase.User;
};

const Reverse: FunctionComponent<ReverseProps> = ({
  user
}) => {
  const dbTextsPath = `users/${user.uid}/texts`;
  const dbRef = firebase.database().ref(dbTextsPath);

  const [texts] = useListVals(dbRef);

  const isValidTextObject = (text: any): boolean => {
    return (
      text instanceof Object &&
      text.hasOwnProperty('content')
    );
  };

  const getTextContent = (text: any): string => {
    return text.content;
  };

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
        <Typography variant="h5">
          Reversed text strings:
        </Typography>
        {texts &&
          texts
            .reverse()
            .map(
              (text, index) =>
                isValidTextObject && (
                  <Typography key={index}>
                    {getTextContent(text)}
                  </Typography>
                )
            )}
        {[1, 2, 3]
          .reverse()
          .map(
            (text, index) =>
              isValidTextObject && (
                <Typography key={index}>
                  {getTextContent(text)}
                </Typography>
              )
          )}
      </div>
    </>
  );
};

export default Reverse;
