import { StateShema } from 'app/providers/StoreProvider';

export const getLoginUsername = (state: StateShema) => state?.loginForm?.username || '';
