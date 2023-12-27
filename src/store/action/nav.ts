import * as types from '../actionType';
export const getNavModule = (payload: string) => {
    console.log(payload);
    return {
        type: types.NAV_MODULE,
        payload: payload
    };
};

export const getSubNavModule = (payload: string) => {
    return {
        type: types.SUB_NAV_MODULE,
        payload: payload
    };
};
