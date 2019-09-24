import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Form, Row, Col } from 'react-bootstrap';
import { TextField } from 'office-ui-fabric-react';
import ButtonActions from './ButtonActions';

import { DatePicker } from '../../../../libs';

const defaultValues = {
  company_tax_name: '',
  registered_no: '',
  tax_address: '',
  serial_invoice_tax_no: '',
  vat_tax_no: '',
  branch_tax_code: '',
  klu_code: '',
};

const Taxation = ({ onPrevTab, onCloseWindow, onNextTab }) => {
  const [vatRegDate, setVatRegDate] = useState(null);
  const handleSelectDate = (value) => {
    setVatRegDate(value);
  };

  return (
    <Formik initialValues={{ ...defaultValues }}>
      {({ values, handleChange }) => (
        <Form>
          <TextField
            label="Company Tax Name"
            name="company_tax_name"
            value={values.company_tax_name}
            onChange={handleChange}
          />
          <TextField
            label="Registered Tax No"
            name="registered_no"
            value={values.registered_no}
            onChange={handleChange}
          />
          <TextField
            multiline
            label="Company Tax Address"
            name="tax_address"
            value={values.tax_address}
            onChange={handleChange}
          />
          <TextField
            label="Serial Invoice Tax No"
            name="serial_invoice_tax_no"
            value={values.serial_invoice_tax_no}
            onChange={handleChange}
          />
          <Row>
            <Col>
              <TextField
                label="VAT Registered No"
                name="vat_tax_no"
                value={values.vat_tax_no}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <DatePicker
                label="VAT Reg Date"
                value={vatRegDate}
                onSelectDate={handleSelectDate}
              />
            </Col>
          </Row>
          <TextField
            label="Branch Tax Code"
            name="branch_tax_code"
            value={values.branch_tax_code}
            onChange={handleChange}
          />
          <TextField
            label="KLU Code"
            name="klu_code"
            value={values.klu_code}
            onChange={handleChange}
          />

          <ButtonActions
            nextLabel="OK"
            onCloseWindow={onCloseWindow}
            onPrevTab={onPrevTab}
            onNextTab={onNextTab}
          />
        </Form>
      )}
    </Formik>
  );
};

Taxation.propTypes = {
  onPrevTab: PropTypes.func.isRequired,
  onNextTab: PropTypes.func.isRequired,
  onCloseWindow: PropTypes.func.isRequired,
};

export default Taxation;
