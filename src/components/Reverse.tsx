import React, { FunctionComponent } from 'react';
import AppForm from './form/AppForm';

const Reverse: FunctionComponent = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
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
