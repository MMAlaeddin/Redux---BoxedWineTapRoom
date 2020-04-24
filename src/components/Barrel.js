import React from "react";
import PropTypes from "prop-types";

function Barrel(props){

  const itemStyles = {
    height: '270px',
    width: '150px',
    border: '10px solid purple',
    textAlign: 'center',
    padding: '2%',
    marginBottom: '3em',
    color: 'white',
    background: 'gray',
  }
  
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBarrelClicked(props.id)}>
      <div style={itemStyles}>
      <h3>Type of Wine: {props.type}</h3>
      <h5>Vinyard Name: {props.name}</h5>
      <h5>Cost: ${props.price}</h5>
      <h5>ABV: {props.alcoholContent}%</h5>
      <h5>Amount of bottles in stock: {props.quantity}</h5>
      <button onClick={()=> props.whenSellBottleClicked(props.id)} type="submit">Sell Bottle</button>
      </div>
      </div>
    </React.Fragment>
  );
}

Barrel.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenBarrelClicked: PropTypes.func,
  whenSellBottleClicked: PropTypes.func
};

export default Barrel; 