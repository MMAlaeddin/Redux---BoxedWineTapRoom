import React from "react";
import NewBarrelForm from "./NewBarrelForm";
import BarrelList from "./BarrelList";
import EditBarrelForm from './EditBarrelForm';
import BarrelDetail from './BarrelDetail';
import { connect } from 'react-redux';
// import { act } from "react-dom/test-utils";
import PropTypes from "prop-types";


class BarrelControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBarrel: null,
      editing: false
    };
  }

  handleClick = () => {
    if(this.state.selectedBarrel != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBarrel: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewBarrelToList = (newBarrel) => {
    const { dispatch } = this.props;
    const { wineType, name, price, alcoholContent, quantity, id } = newBarrel;
    const action = {
      type: "ADD_BARREL",
      wineType: wineType,
      name: name,
      price: price,
      alcoholContent: alcoholContent,
      quantity: quantity,
      id: id,
    }
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  }

  handleChangingSelectedBarrel = (id) => {
    const selectedBarrel = this.props.masterBarrelList[id]
      this.setState({selectedBarrel: selectedBarrel});
  }

  handleDeletingBarrel = (id) => {
    const { dispatch } = this.props; 
    const action = {
      type: "DELETE_BARREL",
      id: id
    }
    dispatch(action);
    this.setState({ selectedBarrel: null });

  }

  handleSellingBottleFromBarrel = (id) => {
    const currentlySelectedBarrel = this.props.masterBarrelList.filter(barrel => barrel.id === id)[0];
    const newBarrelVolume = currentlySelectedBarrel.quantity - 1;
    const updatedBarrel = {...currentlySelectedBarrel, quantity: newBarrelVolume};
    const aBarrelList = this.state.masterBarrelList.filter(barrel => barrel.id != id)
    this.setState({
      masterBarrelList: [...aBarrelList, updatedBarrel],
      selectedBarrel: updatedBarrel
    });
  }
  
  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingBarrelInList = (barrelToEdit) => {
    const { dispatch } = this.props;
    const { wineType, name, price, alcoholContent, quantity, id } = barrelToEdit; 
    const action = {
        type: "ADD_BARREL",
        wineType: wineType,
        name: name,
        price: price,
        alcoholContent: alcoholContent,
        quantity: quantity,
        id: id,
      }
      dispatch(action);
      this.setState({
        editing: false,
        selectedBarrel: null
      });
    }
  


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditBarrelForm 
        barrel = {this.state.selectedBarrel}
        onEditBarrel = {this.handleEditingBarrelInList} />
      buttonText = "return to Barrels";
    } else if (this.state.selectedBarrel != null) {
      currentlyVisibleState = <BarrelDetail 
        barrel = {this.state.selectedBarrel} 
        onClickingDelete = {this.handleDeletingBarrel}
        onClickingEdit = {this.handleEditClick} />
      buttonText = "return to Barrels";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBarrelForm 
        onNewBarrelCreation={this.handleAddingNewBarrelToList}/>
      buttonText = "return to Barrels";
    } else {
      currentlyVisibleState = <BarrelList 
        barrelList={this.props.masterBarrelList} 
        onBarrelSelection={this.handleChangingSelectedBarrel}
        onClickingSellBottle={this.handleSellingBottleFromBarrel} />
      buttonText = "Add a Barrel";
    }


    return (
      <React.Fragment> 
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

BarrelControl = connect(mapStateToProps)(BarrelControl);

BarrelControl.propTypes = {
  masterBarrelList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterBarrelList: state.masterBarrelList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

export default BarrelControl; 