import React, { Component } from 'react';
{/* import logo from './logo.svg'; */}
{/* Importing the Calculator component to be used in the render method. */}
import Calculator from './components/Calculator';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      sum: null
  }}

  handleReset(event) {
  {/* When user click the "Clear" button, clear div's and initialize the state. */}
	  document.getElementById('n1').value = "";
	  document.getElementById('n2').value = "";
	  this.setState({
    	sum: null
  })}

  handleSum(event) {
  {/* When user click the equal "=" button, get both div's value and sum. */}
  {/* parseInt also let the user know if the input is NaN (not a number). */}
   this.setState({
      sum: parseInt(document.getElementById('n1').value) + parseInt(document.getElementById('n2').value)
  })}

  render() {
  {/* These events will be used in the Calculator component buttons: */}
  	return (
  		<Calculator 
  		onClickReset = {(event) => this.handleReset(event)}
  		onClickSum = {(event) => this.handleSum(event)}
  		sum = {this.state.sum} />
  )}

}

export default App;