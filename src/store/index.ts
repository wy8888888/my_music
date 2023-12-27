import { configureStore } from '@reduxjs/toolkit';
// import counter from './modules/counter';
import reducer from './reducer';
import {
    useSelector,
    useDispatch,
    TypedUseSelectorHook,
    shallowEqual
} from 'react-redux';

const store = configureStore({
    reducer: reducer
});

type GetStateFnType = typeof store.getState;
type IRootState = ReturnType<GetStateFnType>;
type DispathType = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export const useAppDispatch: () => DispathType = useDispatch;
export const shallowEqualApp = shallowEqual;

export default store;
