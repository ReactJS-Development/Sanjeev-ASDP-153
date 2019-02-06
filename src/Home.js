import configureStore from './store';
import * as actions from './actions';
import React, { Component } from 'react';
import Apply from './Apply';

class Home extends Component {
	
	componentDidMount(){
		this.unsubscribe = this.store.subscribe(() => {
			this.setState(this.store.getState())
		});
	}
	componentWillUnmount(){
		this.unsubscribe();
	}

	constructor(props){
		super(props);
		this.store = configureStore();
		this.state = this.store.getState();

		this.resetTime = () =>	{
			this.store.dispatch(actions.resetTimer());
		};

		setInterval(() =>{
			this.store.dispatch(actions.decrement());
		},1000);

		this.changeRed = () =>{
			this.store.dispatch(actions.changeRed());
		}

		this.changeGreen = () =>{
			this.store.dispatch(actions.changeGreen());
		}

		this.changeBlue = () =>{
			this.store.dispatch(actions.changeBlue());
		}
	}

	render() {
    	return (
          <div>
            <p>{this.state.currentValue}</p>
            <button onClick={this.resetTime}>ResetTime</button><br/>
            <button onClick={this.changeRed}>Red</button><br/>
            <button onClick={this.changeGreen}>Green</button><br/>
            <button onClick={this.changeBlue}>Blue</button>
            <h1 style={{color:this.state.color,backgroundColor:this.state.bgcolor}}>This is Text1 </h1>
            <h1 style={{color:this.state.color,backgroundColor:this.state.bgcolor}}>This is Text2 </h1>
            <h1 style={{color:this.state.color,backgroundColor:this.state.bgcolor}}>This is Text3 </h1>
            <img src={this.state.imagePath} width="300px" height="300px"></img>
            <Apply />
          </div>
    	);
  	}
}
export default Home;


