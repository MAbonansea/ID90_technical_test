import { createAction, props } from '@ngrx/store';
import { AirlineInterface } from '../../interfaces/Airline.interface';

export const airlineLoad = createAction(
  '[Airline]'
);

export const airlineLoadFail = createAction(
    '[Airline] Fail',
    props<{ error:any }>()
); 

export const airlineLoadSuccesses = createAction(
    '[Airline ] Successes',
    props<{airlineData:AirlineInterface[]}>()
);
