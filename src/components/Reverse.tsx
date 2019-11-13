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

  interface TextObject {
    content: string;
  }

  const [texts] = useListVals<TextObject>(dbRef);

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
            .map((text, index) => (
              <Typography key={index}>
                {text.content}
              </Typography>
            ))}
      </div>
    </>
  );
};

export default Reverse;
