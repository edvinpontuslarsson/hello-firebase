import React, { FunctionComponent } from 'react';

type AppBarProps = {
  signOut: any;
};

const AppBar: FunctionComponent<AppBarProps> = ({
  signOut
}) => {
  return (
    <>
      <button onClick={signOut}>Sign out</button>
    </>
  );
};

export default AppBar;
