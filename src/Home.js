import configureStore from './store';
import * as actions from './actions';
import React, { Component } from 'react';

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
		
	}

	render() {
    return (
          <div>
            <p>{this.state.currentValue}</p>

            <button onClick={this.resetTime}>ResetTime</button>
          </div>
    );
  }
}
export default Home;


