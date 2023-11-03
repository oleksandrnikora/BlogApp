import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type { StateShema, ReduxStoreWithManager, ThunkConfig } from './config/StateShema';

export {
    StoreProvider,
    createReduxStore,
    StateShema,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkConfig,
};
