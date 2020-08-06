import { createAction, props } from '@ngrx/store';
import { AuthParam } from '../../interfaces/Auth.interface';
import { UserInterface } from '../../interfaces/User.interface';
import { AccountInterface } from '../../interfaces/Account.interface';

export const login = createAction(
  '[Login Page] Login',
  props<{ params: AuthParam }>()
);
export const loginFail = createAction(
    '[Login Page] Fail',
    props<{ error:any }>()
); 
export const loginSuccesses = createAction(
    '[Login Page] Successes',
    props<{user:UserInterface,account:AccountInterface}>()
);
