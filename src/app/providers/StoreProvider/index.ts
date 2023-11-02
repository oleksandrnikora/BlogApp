import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type { StateShema, ReduxStoreWithManager } from './config/StateShema';

export {
    StoreProvider,
    createReduxStore,
    StateShema,
    ReduxStoreWithManager,
    AppDispatch,
};
