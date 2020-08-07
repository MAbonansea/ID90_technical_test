import { Action, createReducer, on } from '@ngrx/store';
import * as HotelActions from '../actions/hotel.actions';

import { HotelInterface } from '../../interfaces/Hotel.interface';

export interface State {
    pending: boolean;
    error: any;
    hotelData: HotelInterface[];
}

export const initialState: State = {
    pending: false,
    error : null,
   hotelData : null
};


const userReducer = createReducer(
    initialState,
    on(HotelActions.hotelLoad, state => ({ ...state, pending: true })),
    on(HotelActions.hotelLoadFail, (state, { error }) => ({ ...state, pending:false, error })),
    on(HotelActions.hotelLoadSuccesses, (state, { hotelData })  => ({ ...state, pending:false, hotelData:hotelData }))
);

export function reducer(state: State | undefined, action: Action) {
    return userReducer(state, action);
}