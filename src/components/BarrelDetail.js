import React from "react";
import PropTypes from "prop-types";

function BarrelDetail(props){
  const { barrel } = props;

  return (
    <React.Fragment>
        <h1>{barrel.name}</h1>
        <p>{barrel.type}</p>
        <p>{barrel.price}</p>
        <p>{barrel.alcoholContent}</p>
        <p>{barrel.quantity}</p>

          {/* <button onClick={()=> onClickingDelete(barrel.id)}>Remove Barrel</button> */}
        {/* <button onClick={ props.barrelList }>Back to Barrels</button> */}
    </React.Fragment>
  );
}

BarrelDetail.propTypes = {
  barrel: PropTypes.object
  // onClickingDelete: PropTypes.func,
  // onClickingEdit: PropTypes.func
};

export default BarrelDetail;