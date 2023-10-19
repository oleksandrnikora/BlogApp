import { CounterShema } from 'enteties/Counter';
import { UserSchema } from 'enteties/User';

export interface StateShema {
    counter: CounterShema;
    user: UserSchema;
}
