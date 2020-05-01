import React from "react";
import NewBarrelForm from "./NewBarrelForm";
import BarrelList from "./BarrelList";
import EditBarrelForm from './EditBarrelForm';
import BarrelDetail from './BarrelDetail';
import { connect } from 'react-redux';

class BarrelControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
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
    const selectedBarrel = this.state.masterBarrelList.filter(barrel => barrel.id === id)[0];
    this.setState({selectedBarrel: selectedBarrel});
  }

  handleDeletingBarrel = (id) => {
    const newMasterBarrelList = this.state.masterBarrelList.filter(barrel => barrel.id !== id);
    this.setState({
      masterBarrelList: newMasterBarrelList,
      selectedBarrel: null
    });
  }

  handleSellingBottleFromBarrel = (id) => {
    const currentlySelectedBarrel = this.state.masterBarrelList.filter(barrel => barrel.id === id)[0];
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
        barrelList={this.state.masterBarrelList} 
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

BarrelControl = connect()(BarrelControl);

export default BarrelControl; 