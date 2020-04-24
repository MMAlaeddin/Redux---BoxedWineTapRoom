import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function NewBarrelForm(props) {
  function handleNewBarrelFormSubmission(event) {
    event.preventDefault();
    props.onNewBarrelCreation({
      type: event.target.type.value,
      name: event.target.name.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler = {handleNewBarrelFormSubmission}
      buttonText="Add Barrel" />
    </React.Fragment>
  );
}

NewBarrelForm.propTypes = {
  onNewBarrelCreation: PropTypes.func
}

export default NewBarrelForm;