import React, { Component } from 'react';
import { Route ,withRouter } from "react-router-dom";
import MyAccount from './MyAccount';
import configureStore from './store';
import * as actions from './actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.store = configureStore();
    this.state = this.store.getState();
  }
  componentDidMount(){
    this.unsubscribe = this.store.subscribe(() => {
      this.setState(this.store.getState())
    });
  }
  componentWillUnmount(){
    this.unsubscribe();
  }

  onClickButton = () => {
    const password = this.refs.password.value;
    const emailId = this.refs.emailId.value;
    console.log('emailId: ' +emailId+ 'password:'+password);
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: password,
        emailId: emailId  
      })
    })
    .then(response => response.json())
    .then(data => this.store.dispatch(actions.userDetails({data})));
  }

  shouldComponentUpdate(){
    return true;
  }

  componentWillUpdate(){
    
    console.log('i am in componentWillUpdate');
    console.log(this.store.getState());
  }

  render() {
    console.log(this.state.detail);

    return (
      <div className="signupform">
        <h1 className="joinus">SIGN IN</h1>
        Email:<input type="text" ref="emailId"></input><br/><hr/>
        password:<input type="password" ref="password"></input><br/><hr/>
        <button className="signupbtn" onClick={this.onClickButton}>Login</button>
      </div>
    );
  }
}
export default Login;
