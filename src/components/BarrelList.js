import React from "react";
import Barrel from "./Barrel";
import PropTypes from "prop-types";

function BarrelList(props) {
  return(
    <React.Fragment>
      <hr/>
      {props.barrelList.map((barrel) => 
      <Barrel
      whenBarrelClicked = {props.onBarrelSelection}
      type = {barrel.type}
      name = {barrel.name}
      price = {barrel.price}
      alcoholContent = {barrel.alcoholContent}
      quantity = {barrel.quantity}
      id = {barrel.id}
      key = {barrel.id} />
      )}
    </React.Fragment>
  );
}

BarrelList.propTypes = {
  barrelList: PropTypes.array,
  onBarrelSelection: PropTypes.func
};

export default BarrelList; 