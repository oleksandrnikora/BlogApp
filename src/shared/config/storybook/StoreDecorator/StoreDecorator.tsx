import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateShema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'enteties/Profile';
import { loginReducer } from 'feauters/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateShema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (state: DeepPartial<StateShema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={defaultAsyncReducers}>
        <StoryComponent />
    </StoreProvider>
);
