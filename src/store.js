import {createStore} from 'redux';
import mainReducer from './reducers';

const configureStore = () => {
	return createStore(mainReducer,{currentValue:110,color:"black",bgcolor:"lightblue",details: { },imagePath:"https://cdn.cnn.com/cnnnext/dam/assets/150215112230-india-pakistan-cricket-exlarge-169.jpg"});
}
export default configureStore;