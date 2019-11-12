import React, { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';

type AppBarProps = {
  user: any;
  signOut: any;
};

const AppBar: FunctionComponent<AppBarProps> = ({
  user,
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
        {user.isAnonymous ? 'Anonymous' : user.displayName}
      </Button>
      <Button onClick={signOut}>Sign out</Button>
    </div>
  );
};

export default AppBar;
