import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
        type="text"
        name="type"
        placeholder="type of wine" />
        <input 
        type="text"
        name="name"
        placeholder="name of wine" />
        <input
        type="text"
        name="price"
        placeholder="price of wine" />
        <input
        type="text"
        name="alcoholContent"
        placeholder="How boozy is it?" />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;