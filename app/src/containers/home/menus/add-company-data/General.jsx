import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Form, Row, Col } from 'react-bootstrap';
import { TextField, DefaultButton, PrimaryButton } from 'office-ui-fabric-react';

const defaultValue = {
  company_name: '',
  co_registered_no: '',
  address: '',
  phone_1: '',
  phone_2: '',
  phone_3: '',
  fax: '',
  email: '',
  web: '',
};

const propTypes = {
  onCloseWindow: PropTypes.func,
  onNextTab: PropTypes.func,
};

const defaultProps = {
  onCloseWindow: () => undefined,
  onNextTab: () => undefined,
};

const General = ({ onCloseWindow, onNextTab }) => (
  <Formik
    initialValues={{ ...defaultValue }}
  >
    {({ values, handleChange, handleSubmit }) => (
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Company Name"
          name="company_name"
          value={values.company_name}
          onChange={handleChange}
        />
        <TextField
          label="Co. Registered No"
          name="co_registered_no"
          value={values.co_registered_no}
          onChange={handleChange}
        />
        <TextField
          multiline
          rows={3}
          resizable={false}
          label="Company Address"
          name="address"
          value={values.address}
          onChange={handleChange}
        />
        <Row>
          <Col>
            <TextField
              label="Phone 1"
              name="phone_1"
              value={values.phone_1}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <TextField
              label="Phone 2"
              name="phone_2"
              value={values.phone_2}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextField
              label="Fax"
              name="fax"
              value={values.fax}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <TextField
              label="Phone 3"
              name="phone_3"
              value={values.phone_3}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <TextField
          label="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <TextField
          label="Website"
          name="web"
          value={values.web}
          onChange={handleChange}
        />

        <div className="d-flex justify-content-end pt-3">
          <DefaultButton
            text="Help"
          />
          <DefaultButton
            text="Close"
            className="mx-2"
            onClick={onCloseWindow}
          />
          <PrimaryButton
            text="Next"
            onClick={onNextTab}
          />
        </div>
      </Form>
    )}
  </Formik>
);

General.propTypes = propTypes;
General.defaultProps = defaultProps;

export default General;
