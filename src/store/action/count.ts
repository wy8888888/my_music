import * as types from '../actionType';
export const changeMessage = (payload: string) => {
    console.log(payload);
    return {
        type: types.CHANGE_MESSAGE,
        payload: payload
    };
};

export const addCount = (payload: number) => {
    return {
        type: types.ADD_COUNT,
        payload: payload
    };
};
