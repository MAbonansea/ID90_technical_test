import { createSelector , ActionReducerMap  } from '@ngrx/store';
import * as User from './user.reducer';
import * as Airline from './airline.reducer';
import * as Hotel from './hotel.reducer';



export interface AppState {
    user: User.State,
    airline:Airline.State,
    hotel: Hotel.State
}

export const selectUserState = (state: AppState) => state.user;
export const airlineDataState = (state: AppState) => state.airline;
export const hotelDataState = (state: AppState) => state.hotel;


export const selectUser = createSelector(selectUserState, state => state.user);
export const selectUserPending = createSelector(selectUserState, state => state.pending);
export const selectUserError = createSelector(selectUserState, state => state.error);

export const selectHotel = createSelector(hotelDataState, state => state.hotelData);
export const selectHotelPending = createSelector(hotelDataState, state => state.pending);
export const selectHotelError = createSelector(hotelDataState, state => state.error);

export const selectAirline = createSelector(airlineDataState, state => state.airline)

export const reducer : ActionReducerMap<AppState> = {
    user: User.reducer,
    airline: Airline.reducer,
    hotel:Hotel.reducer

}
