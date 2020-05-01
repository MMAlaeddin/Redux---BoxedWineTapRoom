import React from "react";
import Barrel from "./Barrel";
import PropTypes from "prop-types";

function BarrelList(props){
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.barrelList).map((barrel) => {
        return <Barrel
          whenBarrelClicked = {props.onBarrelSelection}
          whenSellBottleClicked = {props.onClickingSellBottle}
          wineType = {barrel.wineType}
          name = {barrel.name}
          price = {barrel.price}
          alcoholContent = {barrel.alcoholContent}
          quantity = {barrel.quantity}
          id = {barrel.id}
          key = {barrel.id} />
      })}
    </React.Fragment>
  );
}

BarrelList.propTypes = {
  barrelList: PropTypes.object,
  onBarrelSelection: PropTypes.func,
  onClickingSellBottle: PropTypes.func
  
};

export default BarrelList; 