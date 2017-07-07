import React, { Component } from 'react';

{/* Creating a class called Calculator. Basically contains 
what I will be rendering (displaying) in the page. */}
class Calculator extends Component {
  render() {
  	return (
	  <div className="container">

	  	{/* Title */}
		<h1>Add with React!</h1>

			<div className="add">
				{/* First input */}
			    <input type="text" id="n1" />
				{/* A Plus Sign (not a button) */}
			    <span id="sum">+</span>
				{/* Second input */}
			    <input type="text" id="n2" />
				{/* Equal Sign Button */}
			    <button id="equal" onClick={this.props.onClickSum}>=</button>
				{/* Result */}
			    <h3>{this.props.sum}</h3>
			    {/* Reset Button */}
			    <button id="reset" onClick={this.props.onClickReset}>Clear</button>
			</div>

	  </div>
	)
  }
}

{/* Exporting calculator to be used in App component. */}
export default Calculator;