import { combineReducers } from 'redux';
import classesReducer from './classesReducer';

//RULES OF REDUCERS
// 1. Must return any value besides 'undefined'
// 2. Produces 'state', or data to be used inside of your app using only previous state and the action
// 3. Must not return reach 'out of itself' to decide what value to return (reducers are pure)
// 4. Must not mutate its input 'state' arg 
// * when working with arrays and objects - strings and ints are immutable


export default combineReducers({
    classState: classesReducer
});