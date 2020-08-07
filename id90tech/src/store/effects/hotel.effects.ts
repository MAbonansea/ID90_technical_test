import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap  } from 'rxjs/operators';
import { HotelAction } from '../actions'
import { HotelService } from '../../services/hotel.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelEffect {

    loadFeatureFlags$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(HotelAction.hotelLoad),
            mergeMap(({params}) =>
              this.hotelService.getHostel(params).pipe(
                map(resp => HotelAction.hotelLoadSuccesses({ hotelData: resp })),
                catchError(error => of(HotelAction.hotelLoadFail({ error })))
              )
            )
          )
    )
  constructor(
    private actions$: Actions,
    private hotelService : HotelService
    
  ) {}
}