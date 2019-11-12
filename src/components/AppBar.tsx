import React, { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';

type AppBarProps = {
  signOut: any;
};

const AppBar: FunctionComponent<AppBarProps> = ({
  signOut
}) => {
  return (
    <div
      style={{
        textAlign: 'right',
        borderBottom: '1px solid'
      }}
    >
      <Button onClick={signOut}>Sign out</Button>
    </div>
  );
};

export default AppBar;
