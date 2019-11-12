import React, { FunctionComponent } from 'react';
import AppForm from './form/AppForm';

type ReverseProps = {
  user: any;
};

const Reverse: FunctionComponent<ReverseProps> = () => {
  return (
    <>
      <div
        style={{ textAlign: 'center', marginTop: '33px' }}
      >
        <AppForm
          onSubmit={({ text }) => {
            console.log(text);
          }}
        />
      </div>
    </>
  );
};

export default Reverse;
