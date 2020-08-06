import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, catchError, mergeMap  } from 'rxjs/operators';
import { AuthLoginAction } from '../actions'
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthEffect {

    loadFeatureFlags$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(AuthLoginAction.login),
            mergeMap(({params}) =>
              this.authService.auth(params).pipe(
                map(resp => AuthLoginAction.loginSuccesses({ account:resp.account,user: resp.member })),
                catchError(error => of(AuthLoginAction.loginFail({ error })))
              )
            )
          )
    )
  constructor(
    private actions$: Actions,
    private authService : AuthService
    
  ) {}
}