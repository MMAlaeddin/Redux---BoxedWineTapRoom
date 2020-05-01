import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function EditBarrelForm(props) {
  const { barrel } = props; 

  function handleEditBarrelFormSubmission(event) {
    event.preventDefault();
    props.onEditBarrel({
      wineType: event.target.wineType.value, 
      name: event.target.name.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      quantity: event.target.quantity.value,
      id: v4()})
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleEditBarrelFormSubmission}
      buttonText="Update Barrel" />
    </React.Fragment>
  );
}

EditBarrelForm.propTypes = {
  onEditBarrel: PropTypes.func
};

export default EditBarrelForm;