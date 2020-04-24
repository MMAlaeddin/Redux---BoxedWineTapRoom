import React from "react";
import BarrelList from "./BarrelList";
import BarrelDetail from './BarrelDetail';
import NewBarrelForm from './NewBarrelForm';

class BarrelControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterBarrelList: [],
      selectedBarrel: null
    };
  }

  handleClick = () => {
    if(this.state.selectedBarrel !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBarrel: null
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


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.selectedBarrel != null) {
        currentlyVisibleState = <BarrelDetail
          barrel = {this.state.selectedBarrel} />
        buttonText = "Return to Barrel Stock List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBarrelForm
        onNewBarrelCreation = {this.handleAddingNewBarrelToList} />
        buttonText = "Return to Barrel Stock List";
    } else {
      currentlyVisibleState = <BarrelList
        barrelList = {this.state.masterBarrelList} />
      buttonText = "Add A Barrel";
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