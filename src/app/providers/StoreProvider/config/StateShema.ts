/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterShema } from 'enteties/Counter';
import { ProfileSchema } from 'enteties/Profile';
import { UserSchema } from 'enteties/User';
import { LoginSchema } from 'feauters/AuthByUsername';

export interface StateShema {
    counter: CounterShema;
    user: UserSchema;

    // async reducer
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateShema>;
    reduce: (state: StateShema, action: AnyAction) => CombinedState<StateShema>;
    add: (key: StateShemaKey, reducer: Reducer) => void;
    remove: (key: StateShemaKey) => void;
}

export type StateShemaKey = keyof StateShema;

export interface ReduxStoreWithManager extends EnhancedStore<StateShema> {
    reducerManager: ReducerManager,
}
