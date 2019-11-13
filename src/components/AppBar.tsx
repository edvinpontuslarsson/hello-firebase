import React, { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';
import firebase from 'firebase/app';
import 'firebase/auth';

type AppBarProps = {
  user: firebase.User;
};

const AppBar: FunctionComponent<AppBarProps> = ({
  user
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid'
      }}
    >
      <Button disableRipple={true} disabled={true}>
        {user.isAnonymous ? 'Anonymous' : user.displayName}
      </Button>
      <Button
        onClick={() => {
          firebase.auth().signOut();
        }}
      >
        Sign out
      </Button>
    </div>
  );
};

export default AppBar;
