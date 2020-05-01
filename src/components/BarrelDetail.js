import React from "react";
import PropTypes from "prop-types";

function BarrelDetail(props){
  const { barrel, onClickingDelete } = props;

  const itemDetail = {
    height: '350px',
    width: '150px',
    border: '10px solid purple',
    textAlign: 'center',
    padding: '1%',
    marginBottom: '3em',
    color: 'white',
    background: 'gray',
    // opacity: 0.7,
  }
  return (
    <React.Fragment>
        <div id="list" style={itemDetail}>
        <h3>Vinyard Name:<strong>{barrel.name}</strong></h3>
        <hr/>
        <p>Type of Wine: <strong>{barrel.wineType}</strong></p>
        <p>Price:</p>
        <p><strong>${barrel.price}</strong></p>
        <p>ABV:</p>
        <p><strong>{barrel.alcoholContent}%</strong></p>
        <p>Quantity:</p>
        <p><strong>{barrel.quantity}</strong></p>
        </div>
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