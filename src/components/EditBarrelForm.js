import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditBarrelForm(props) {
  const { barrel } = props;

  function handleEditBarrelFormSubmission(event) {
    event.preventDefault();
    props.onEditBarrel({
      type: event.target.type.value,
      name: event.target.name.value,
      price: event.target.price.value,
      id: barrel.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler = {handleEditBarrelFormSubmission}
        buttonText "Update Barrel" />
    </React.Fragment>
  );
}

EditBarrelForm.propTypes = {
  onEditBarrel: PropTypes.func
}

export default EditBarrelForm;