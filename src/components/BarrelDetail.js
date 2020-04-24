import React from "react";
import PropTypes from "prop-types";

function BarrelDetail(props){
  const { barrel, onClickingDelete } = props;

  return (
    <React.Fragment>
        <h1>Vinyard Name: {barrel.name}</h1>
        <p>Type of Wine: {barrel.type}</p>
        <p>Price: ${barrel.price}</p>
        <p>ABV: {barrel.alcoholContent}%</p>
        <p>Quantity: {barrel.quantity}</p>

        <button onClick={()=> onClickingDelete(barrel.id)}>Remove Barrel</button> */}
        <button onClick={ props.onClickingEdit }>Update Barrels</button>
    </React.Fragment>
  );
}

BarrelDetail.propTypes = {
  barrel: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default BarrelDetail;