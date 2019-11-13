import React, { FunctionComponent } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Formik, Form } from 'formik';

interface FieldValues {
  text: string;
}

type FormProps = {
  onSubmit: (values: FieldValues) => void;
};

const ReverseForm: FunctionComponent<FormProps> = ({
  onSubmit
}) => {
  return (
    <Formik
      initialValues={{
        text: ''
      }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <TextField
            name="text"
            placeholder="Text to reverse"
            value={values.text}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Button type="submit">Reverse</Button>
        </Form>
      )}
    </Formik>
  );
};

export default ReverseForm;
