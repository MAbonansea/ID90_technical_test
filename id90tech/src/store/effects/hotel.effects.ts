import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap  } from 'rxjs/operators';
import { HotelAction } from '../actions'
import { HotelService } from '../../services/hotel.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HotelEffect {

  loadFeatureFlags$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(HotelAction.hotelLoad),
        mergeMap(({ params }) =>
          this.hotelService.getHostel(params).pipe(
            map(resp => {
              this.router.navigate(['/hotels']);
              return HotelAction.hotelLoadSuccesses({ hotelData: resp.hotels})
            }),
            catchError(error => of(HotelAction.hotelLoadFail({ error })))
          )
        )
      )
  )
  constructor(
    private actions$: Actions,
    private hotelService : HotelService,
    private router : Router
    
  ) {}
}