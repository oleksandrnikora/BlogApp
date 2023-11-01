import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginError.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateShema)).toEqual(true);
    });

    test('should return false', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {},
        };
        expect(getLoginIsLoading(state as StateShema)).toEqual(false);
    });
});
