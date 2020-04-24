import React from "react";
import PropTypes from "prop-types";

function Barrel(props){
  
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBarrelClicked(props.id)}>
      <h3>{props.type}</h3>
      <h5>{props.brand}</h5>
      <h5>{props.price}</h5>
      <h5>{props.alcoholContent}</h5>
      <h5>{props.quantity}</h5>
      </div>
    </React.Fragment>
  );
}

Barrel.propTypes = {
  type: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenBarrelClicked: PropTypes.func
};

export default Barrel; 