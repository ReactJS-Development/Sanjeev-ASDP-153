import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link,withRouter } from "react-router-dom";

class MyAccount extends Component {
  render() {
    return (
      	<div>
	      <h1>Welcome {this.props.location.state.detail}!!! to Welcome Page of ADS</h1>
	    </div>
      )
  }
}

export default MyAccount;
