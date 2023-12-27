import * as types from '../actionType';
import { PayloadAction } from '@reduxjs/toolkit';

const initState = {
    navModule: 'discover',
    subNavModule: 'discover'
};
export default function navReducer(state = initState, action: PayloadAction) {
    switch (action.type) {
        case types.NAV_MODULE:
            return Object.assign({}, state, {
                navModule: action.payload
            });
        case types.SUB_NAV_MODULE:
            return Object.assign({}, state, {
                subNavModule: action.payload
            });
        default:
            return state;
    }
}
