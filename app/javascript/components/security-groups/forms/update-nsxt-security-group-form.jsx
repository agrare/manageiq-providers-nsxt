import React from 'react';
import { Form, Field, FormSpy } from 'react-final-form';
import { Form as PfForm, Grid, Col, Row, Spinner } from 'patternfly-react';
import PropTypes from 'prop-types';
import { required } from 'redux-form-validators';
import { FinalFormField, FinalFormSelect } from '@manageiq/react-ui-components/dist/forms';

const UpdateNsxtSecurityGroupForm = ({loading, updateFormState, values, vmOptions}) => {
  if(loading){
    return (
      <Spinner loading size="lg" />
    );
  }

  return (
    <Form
      onSubmit={() => {}} // handled by modal
      initialValues={values}
      render={({ handleSubmit }) => (
        <PfForm horizontal>
          <FormSpy onChange={state => updateFormState({ ...state, values: state.values })} />
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <Field
                  name="name"
                  component={FinalFormField}
                  label={__('Name')}
                  placeholder="Name of the group"
                  labelColumnSize={3}                  
                  validate={required({ msg: 'Name is required' })}
                />
              </Col>
              <hr />
              <Col xs={12}>
                <Field
                  name="description"
                  component={FinalFormField}
                  label={__('Description')}
                  labelColumnSize={3}                  
                  placeholder="Description of the Security Group"
                />
              </Col>
              <hr />
              <Col xs={12}>
                <Field
                  name="vms"
                  component={FinalFormSelect}
                  label={__('Selected\u00A0VM\'s')}
                  labelColumnSize={3}                  
                  options={vmOptions}
                  multi
                  searchable
                />
              </Col>
              <hr />
            </Row>
          </Grid>
        </PfForm>
      )}
    />
  );
};

UpdateNsxtSecurityGroupForm.propTypes = {
  updateFormState: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  vmOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  )
};

UpdateNsxtSecurityGroupForm.defaultProps = {
  loading: false,
  vmOptions: []
};

export default UpdateNsxtSecurityGroupForm;