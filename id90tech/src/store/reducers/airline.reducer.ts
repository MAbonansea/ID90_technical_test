import { Action, createReducer, on } from '@ngrx/store';
import * as AirlineActions from '../actions/airline.actions';
import { AirlineInterface } from '../../interfaces/Airline.interface';

export interface State {
    pending: boolean;
    error: any;
    airline: AirlineInterface[];
}

export const initialState: State = {
    pending: false,
    error: null,
    airline: null
};

const userReducer = createReducer(
    initialState,
    on(AirlineActions.airlineLoad, state => ({ ...state, pending: true })),
    on(AirlineActions.airlineLoadFail, (state, { error }) => ({ ...state, pending: false, error })),
    on(AirlineActions.airlineLoadSuccesses, (state, { airlineData }) => ({ ...state, pending: false, airline: airlineData }))
);

export function reducer(state: State | undefined, action: Action) {
    return userReducer(state, action);
}