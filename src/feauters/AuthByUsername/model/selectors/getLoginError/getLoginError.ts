import { StateShema } from 'app/providers/StoreProvider';

export const getLoginError = (state: StateShema) => state?.loginForm?.error;
