import { createAction, props } from '@ngrx/store';
import { HotelInterface, HotelParam } from '../../interfaces/Hotel.interface';

export const hotelLoad = createAction(
  '[Hotel]',
  props<{ params: HotelParam }>()
);

export const hotelLoadFail = createAction(
    '[Hotel] Fail',
    props<{ error:any }>()
); 

export const hotelLoadSuccesses = createAction(
    '[Hotel] Successes',
    props<{hotelData:HotelInterface[]}>()
);
