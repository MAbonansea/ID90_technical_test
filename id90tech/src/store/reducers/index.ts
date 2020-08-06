import { createSelector , ActionReducerMap  } from '@ngrx/store';
import * as User from './user.reducer';
import * as Airline from './airline.reducer';
import { state } from '@angular/animations';
import { Action } from 'rxjs/internal/scheduler/Action';


export interface AppState {
    user: User.State,
    airline:Airline.State
}

export const selectUserState = (state: AppState) => state.user;
export const airlineDataState = (state: AppState) => state.airline;


export const selectUser = createSelector(selectUserState, state => state.user);
export const selectUserPending = createSelector(selectUserState, state => state.pending);
export const selectUserError = createSelector(selectUserState, state => state.error);

export const selectAirline = createSelector(airlineDataState, state => state.airline)

export const reducer : ActionReducerMap<AppState> = {
    user: User.reducer,
    airline: Airline.reducer
}
