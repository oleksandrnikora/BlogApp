/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterShema } from 'enteties/Counter';
import { ProfileSchema } from 'enteties/Profile';
import { UserSchema } from 'enteties/User';
import { LoginSchema } from 'feauters/AuthByUsername';
import { NavigateOptions, To } from 'react-router-dom';

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

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateShema;
}
