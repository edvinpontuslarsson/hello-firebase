import React, { FunctionComponent } from 'react';
import Form from './form/Form';

const Reverse: FunctionComponent = () => {
  return (
    <>
      <Form
        onSubmit={() => {
          console.log('test');
        }}
      />
    </>
  );
};

export default Reverse;
