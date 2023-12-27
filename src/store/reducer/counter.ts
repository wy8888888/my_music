import * as types from '../actionType';
import { PayloadAction } from '@reduxjs/toolkit';

const initState = {
    count: 0,
    message: 'hello world'
};
export default function app(state = initState, action: PayloadAction) {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            console.log(state);
            console.log(action);
            return Object.assign({}, state, {
                message: action.payload
            });
        case types.ADD_COUNT:
            return Object.assign({}, state, {
                message: action.payload
            });
        default:
            return state;
    }
}
