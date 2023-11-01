import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider';

// eslint-disable-next-line max-len
type AsyncCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue }>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateShema;

    actionCreator: AsyncCreatorType<Return, Arg, RejectedValue>;

    constructor(actionCreator: AsyncCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}
