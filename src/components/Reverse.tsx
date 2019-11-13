import React, { FunctionComponent } from 'react';
import ReverseForm from './ReverseForm';
import firebase from 'firebase/app';
import 'firebase/database';
import { useListVals } from 'react-firebase-hooks/database';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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
    <div
      style={{
        marginTop: '33px',
        marginLeft: '15px'
      }}
    >
      <ReverseForm
        onSubmit={({ text }) => {
          dbRef.push({ content: text });
        }}
      />

      <Typography
        variant="h5"
        style={{ marginTop: '33px' }}
      >
        Reversed text strings:
      </Typography>
      <List>
        {texts &&
          texts.reverse().map((text, index) => (
            <ListItem key={index}>
              <Typography key={index}>
                {text.content}
              </Typography>
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default Reverse;
