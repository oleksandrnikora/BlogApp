import { CounterShema } from 'enteties/Counter';
import { UserSchema } from 'enteties/User';
import { LoginSchema } from 'feauters/AuthByUsername';

export interface StateShema {
    counter: CounterShema;
    user: UserSchema;
    loginForm: LoginSchema;
}
