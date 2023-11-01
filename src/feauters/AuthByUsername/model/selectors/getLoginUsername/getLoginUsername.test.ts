import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginPassword.test', () => {
    test('should return username', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                username: 'admin',
            },
        };
        expect(getLoginUsername(state as StateShema)).toEqual('admin');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {},
        };
        expect(getLoginUsername(state as StateShema)).toEqual('');
    });
});
