import { StateShema } from 'app/providers/StoreProvider';

export const getProfileIsLoading = (state: StateShema) => state.profile?.isLoading;
