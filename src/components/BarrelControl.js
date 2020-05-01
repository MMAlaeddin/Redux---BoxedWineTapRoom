import React from "react";
import NewBarrelForm from "./NewBarrelForm";
import BarrelList from "./BarrelList";
import EditBarrelForm from './EditBarrelForm';
import BarrelDetail from './BarrelDetail';
import { connect } from 'react-redux';
import * as a from './../actions';
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
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
    this.setState({selectedBarrel: null});
  }

  handleAddingNewBarrelToList = (newBarrel) => {
    const { dispatch } = this.props;
    const action = a.addBarrel(newBarrel);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedBarrel = (id) => {
    const selectedBarrel = this.props.masterBarrelList[id]
      this.setState({selectedBarrel: selectedBarrel});
  }

  handleDeletingBarrel = (id) => {
      const { dispatch } = this.props;
      const action = a.deleteBarrel(id);
      dispatch(action);
      this.setState({selectedBarrel: null});
    
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
    const action = a.addBarrel(barrelToEdit);
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
    } else if (this.props.formVisibleOnPage) {
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

BarrelControl.propTypes = {
  masterBarrelList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterBarrelList: state.masterBarrelList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
BarrelControl = connect(mapStateToProps)(BarrelControl);

export default BarrelControl; 