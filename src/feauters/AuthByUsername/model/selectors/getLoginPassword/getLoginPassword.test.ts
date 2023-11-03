import { StateShema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                password: '12345',
            },
        };
        expect(getLoginPassword(state as StateShema)).toEqual('12345');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {},
        };
        expect(getLoginPassword(state as StateShema)).toEqual('');
    });
});
