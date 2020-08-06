import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, catchError, mergeMap  } from 'rxjs/operators';
import { AirlineAction } from '../actions'
import { AirlineService } from '../../services/airline.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirlineEffect {

    loadFeatureFlags$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(AirlineAction.airlineLoad),
            mergeMap(() =>
              this.airlineService.getAirline().pipe(
                map(resp => AirlineAction.airlineLoadSuccesses({ airlineData:resp })),
                catchError(error => of(AirlineAction.airlineLoadFail({ error })))
              )
            )
          )
    )
  constructor(
    private actions$: Actions,
    private airlineService : AirlineService
    
  ) {}
}