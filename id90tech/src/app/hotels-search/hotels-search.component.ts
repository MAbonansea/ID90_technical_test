import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DatePipe } from '@angular/common';
import { HotelParam } from '../../interfaces/Hotel.interface';
import { hotelLoad } from '../../store/actions/hotel.actions';
import { Router } from '@angular/router';
import * as state from '../../store/reducers';
import { MatSnackBar } from '@angular/material/snack-bar';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-hotels-search',
  templateUrl: './hotels-search.component.html',
  styleUrls: ['./hotels-search.component.css']
})
export class SearchHotelsComponent implements OnInit {
  constructor(
    private store: Store,
    public datePipe: DatePipe,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}
  

  public result: any;
  from: Date;
  to: Date;
  today: Date;
  city: any;
  guests: number;
  error : string;
  pending: boolean;

  private ngUnsubscribe = new Subject();
  private hotelError$ = this.store.pipe(select(state.selectHotelError));
  private hotelPending$ = this.store.pipe(select(state.selectHotelPending));

  ngOnInit(): void {
    this.today = new Date();
    this.fecthError();
    this.getHotelPending();
  }

  getHotelPending() {
    this.hotelPending$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((isPending) => {
      this.pending = isPending;
    });
  }

  Search() {
    if (this.city && this.from && this.to && this.guests.toString() !== "" ) {

      const params: HotelParam = {
        destiny: this.city,
        checkin: this.FormatDate(this.from.toString()),
        checkout: this.FormatDate(this.to.toString()),
        capacity: this.guests
      }
      
      this.result = this.store.dispatch(hotelLoad({ params }));

      return
    }
    this.error = "Incomplete Fields or Invalid Value";
    this.openSnackBar();
  }

  FormatDate(date: string) {

    date = this.datePipe.transform(date, 'yyyy-MM-dd');

    return date;
  }
  openSnackBar() {

    this._snackBar.open(this.error,"", {
      duration: 5 * 1000,
    });
  }

  fecthError(){
    this.hotelError$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((error) => {
      if(error){
        this.error = "Incomplete Fields or Invalid Value";
        this.openSnackBar();
      }
    })
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
  }


}
