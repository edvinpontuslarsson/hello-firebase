import React, { FunctionComponent } from 'react';
import AppForm from './form/AppForm';

const Reverse: FunctionComponent = () => {
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
