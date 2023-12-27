import { combineReducers } from '@reduxjs/toolkit';
import counter from '../reducer/counter';
import navReducer from '../reducer/nav';

const reducer = combineReducers({
    counter: counter,
    nav: navReducer
});

export default reducer;
