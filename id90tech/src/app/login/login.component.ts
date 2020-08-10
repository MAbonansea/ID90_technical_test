import { Component, OnInit } from '@angular/core';
import { AuthParam } from '../../interfaces/Auth.interface';
import { AirlineInterface } from '../../interfaces/Airline.interface'
import { Store, select } from '@ngrx/store';
import { login } from 'src/store/actions/login.actions';
import { airlineLoad } from 'src/store/actions/airline.actions';
import { takeUntil, take } from 'rxjs/operators';
import * as state from '../../store/reducers';
import { Subject } from 'rxjs/internal/Subject';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit   {

  title = 'Login';
  airlineOption: AirlineInterface[];
  filteroption: AirlineInterface[];
  airline: string;
  username: string;
  password: string;
  employee_number: string;
  error : string;
  pending : boolean;
  airlineControl : AirlineInterface;
  private airlines$ = this.store.pipe(select(state.selectAirline));
  private ngUnsubscribe = new Subject();
  private userError$ = this.store.pipe(select(state.selectUserError));
  private userPending$ = this.store.pipe(select(state.selectUserPending));
  
  constructor(
    private store: Store,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    
    this.store.dispatch(airlineLoad());
    this.fetchAirlines();
    this.fecthPending();
    this.fecthError();

  }

  public filter(value: any): void {
    const filterValue = value.toLowerCase();
    
    this.filteroption = this.airlineOption.filter(option => option.name.includes(filterValue));
  }

  Login() {

    const Data : AuthParam = {
      airline: this.airline,
      employee_number: this.employee_number,
      password: this.password,
      remember_me: 1
    }

    this.store.dispatch(login({ params: Data }))
  }

  fetchAirlines() {

    this.airlines$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((airlines) => {
      this.airlineOption = airlines;
      this.filteroption = airlines;

    })
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
  }

  fecthError(){
    this.userError$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((error) => {
      if(error){
        this.error = "Invalid login credentials";
        this.openSnackBar();
      }
    })
  }

  fecthPending(){
    this.userPending$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((pending) => {
      this.pending = pending;
    })
  }

  openSnackBar() {

    this._snackBar.open(this.error,"", {
      duration: 5 * 1000,
    });
  }
  
}
