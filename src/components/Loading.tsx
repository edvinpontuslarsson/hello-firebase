import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';

const Loading: FunctionComponent = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '33px' }}>
      <Typography variant="h5">
        Loading, please wait...
      </Typography>
    </div>
  );
};

export default Loading;
