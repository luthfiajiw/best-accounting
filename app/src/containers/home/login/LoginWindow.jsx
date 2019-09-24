import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import {
  TextField, Label, DefaultButton, PrimaryButton,
} from 'office-ui-fabric-react';

import Window from '../../../components/home/Window';

const LoginWindow = ({ isOpen, onCloseWindow, onSubmit }) => (
  <Window
    isOpen={isOpen}
    titleWindow="Login"
    icon="far fa-sign-in"
    windowStyle={{ width: '400px' }}
  >
    <Formik initialValues={{ username: 'ADMINISTRATOR', password: '' }}>
      {({ values, handleChange }) => (
        <Form>
          <Label htmlFor="username">
            <i className="fal fa-user mr-2" />
            Username
          </Label>
          <TextField
            id="username"
            name="username"
            value={values.username}
            onChange={handleChange}
          />

          <Label htmlFor="password">
            <i className="fal fa-lock-alt mr-2" />
            Password
          </Label>
          <TextField
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />

          <div className="d-flex justify-content-end pt-3">
            <DefaultButton
              text="Cancel"
              className="mr-2"
              onClick={() => onCloseWindow('LoginWindow')}
            />
            <PrimaryButton
              text="Login"
              onClick={onSubmit}
            />
          </div>
        </Form>
      )}
    </Formik>
  </Window>
);

export default LoginWindow;
