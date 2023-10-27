import { StateShema } from 'app/providers/StoreProvider';

export const getLoginPassword = (state: StateShema) => state?.loginForm?.password || '';
