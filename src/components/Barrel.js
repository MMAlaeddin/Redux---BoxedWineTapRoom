import React from "react";
import PropTypes from "prop-types";
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';

function Barrel(props){

  const itemStyles = {
    height: '270px',
    width: '150px',
    border: '10px dotted purple',
    textAlign: 'center',
    padding: '2%',
    marginBottom: '3em',
    color: 'purple',
    background: 'gray',
    radius: "20%",
    // opacity: 0.7,
  }
  
  return (
    <React.Fragment>
      {/* <Container>
        <Row> */}
         
            <div onClick = {() => props.whenBarrelClicked(props.id)}>
            <div id="list" style={itemStyles}>
            <h3>Type of Wine: {props.wineType}</h3>
            <h5>Vinyard Name: {props.name}</h5>
            <h5>Cost: ${props.price}</h5>
            <h5>ABV: {props.alcoholContent}%</h5>
            <h5>Amount of bottles in stock: {props.quantity}</h5>
            <button onClick={()=> props.whenSellBottleClicked(props.id)} type="submit">Sell Bottle</button>
            </div>
            </div>
       
        {/* </Row> */}
      {/* </Container> */}
    </React.Fragment>
  );
}

Barrel.propTypes = {
  wineType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenBarrelClicked: PropTypes.func,
  whenSellBottleClicked: PropTypes.func
};

export default Barrel; 