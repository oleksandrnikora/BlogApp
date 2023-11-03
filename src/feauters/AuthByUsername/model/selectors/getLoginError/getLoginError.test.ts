import { StateShema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getLoginError(state as StateShema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {},
        };
        expect(getLoginError(state as StateShema)).toEqual(undefined);
    });
});
