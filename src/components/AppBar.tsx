import React, { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

type AppBarProps = {
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
