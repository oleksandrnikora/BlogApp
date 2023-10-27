import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'enteties/Counter';
import { userReducer } from 'enteties/User';
import { loginReducer } from 'feauters/AuthByUsername';
import { StateShema } from './StateShema';

export function createReduxStore(initialState: StateShema) {
    const rootReducers: ReducersMapObject<StateShema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateShema>({
        reducer: rootReducers,

        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
