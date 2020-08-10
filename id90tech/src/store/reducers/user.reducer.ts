import { Action, createReducer, on } from '@ngrx/store';
import * as LoginActions from '../actions/login.actions';
import { UserInterface } from '../../interfaces/User.interface';

export interface State {
    pending: boolean;
    error: any;
    user: UserInterface;
}

export const initialState: State = {
    pending: false,
    error : null,
    user: null
};

const userReducer = createReducer(
    initialState,
    on(LoginActions.login, state => ({ ...state, pending: true })),
    on(LoginActions.loginFail, (state, { error }) => ({ ...state, pending:false, error })),
    on(LoginActions.loginSuccesses, (state, { user })  => ({ ...state, pending:false, user }))
);

export function reducer(state: State | undefined, action: Action) {
    return userReducer(state, action);
}