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
    this.setState({
      masterBarrelList: newMasterBarrelList,
      formVisibleOnPage: false
    });
  }


  render(){
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}