import React, { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';

type AppBarProps = {
  user: any;
  signOut: any;
};

const AppBar: FunctionComponent<AppBarProps> = ({
  signOut
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
        Welcome user
      </Button>
      <Button onClick={signOut}>Sign out</Button>
    </div>
  );
};

export default AppBar;
