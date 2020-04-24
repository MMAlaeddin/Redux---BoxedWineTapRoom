import React from "react";
import NewBarrelForm from "./NewBarrelForm";
import BarrelList from "./BarrelList";
import EditBarrelForm from './EditBarrelForm';
import BarrelDetail from './BarrelDetail';

class BarrelControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterBarrelList: [],
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
    const newMasterBarrelList = this.state.masterBarrelList.concat(newBarrel);
    this.setState({ masterBarrelList: newMasterBarrelList });
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
    const updatedList = currentlySelectedBarrel.concat(newBarrelVolume);
    this.setState({masterBarrelList: updatedList});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingBarrelInList = (barrelToEdit) => {
    const editedMasterBarrelList = this.state.masterBarrelList
      .filter(barrel => barrel.id !== this.state.selectedBarrel.id)
      .concat(barrelToEdit);
    this.setState({
      masterBarrelList: editedMasterBarrelList,
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
        onClickingBuy={this.handleBarrelPurchase}
        onClickingRestock={this.handleBarrelRestock} />
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

export default BarrelControl; 