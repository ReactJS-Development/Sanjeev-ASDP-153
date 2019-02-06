 const mainReducer = (state,action) => {
 	switch(action.type){
 		case 'RESET_COUNTER' :
 			return {
 				...state,
 				currentValue:action.newValue
 			}
 		case 'USER_DETAILS' :
 			return {
 				...state,
 				details:action.details
 			}
 		case 'DECREMENT' :
 			return {
 				...state,
 				currentValue:state.currentValue+1
 			}
 		case 'RED' :
 			return {
 				...state,
 				color:action.newValue,
 				bgcolor:action.newValue2,
 				imagePath:action.imagePath
 			}
 		case 'GREEN' :
 			return {
 				...state,
 				color:action.newValue,
 				bgcolor:action.newValue2,
 				imagePath:action.imagePath
 			}
 		case 'BLUE' :
 			return {
 				...state,
 				color:action.newValue,
 				bgcolor:action.newValue2,
 				imagePath:action.imagePath
 			}
 	default:
 	return state;
 }
}
export default mainReducer;