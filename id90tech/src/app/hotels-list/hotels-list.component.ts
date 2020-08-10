import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Store, select } from '@ngrx/store';
import * as state from '../../store/reducers';
import { takeUntil } from 'rxjs/operators';
import { HotelInterface } from 'src/interfaces/Hotel.interface';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  displayedColumns: string[]
  dataSource: any[];
  markets: any[];
  initMarkert: any
  activeMap: boolean;
  pending: boolean

  constructor(private store: Store) { }

  private hotels$ = this.store.pipe(select(state.selectHotel));
  private hotelsPending$ = this.store.pipe(select(state.selectHotelPending));
  private ngUnsubscribe = new Subject();

  ngOnInit() {
    this.initMarkert = {
      latitude: null,
      longitude: null
    }
    
    this.activeMap = false;
    this.markets = [];
    this.fecthHotels();
    this.fecthHotelsPending();
  }
  ViewMap() {
    this.activeMap = true;
  }
  fecthHotelsPending() {
    this.hotelsPending$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((pending: boolean) => {
      this.pending = pending;
    })
  }

  fecthHotels() {
    this.hotels$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((hotels: HotelInterface[]) => {
      if (hotels) {
        this.dataSource = hotels;
        this.dataSource = this.dataSource.map(element => ({ ...element, selected: "" }))
        this.initMarkert.longitude = hotels[0].location.longitude;
        this.initMarkert.latitude = hotels[0].location.latitude;
        this.displayedColumns = ["name", "star_rating", "total", "location_description"];
        if (this.dataSource) {
          this.dataSource.forEach(element => {
            let market = { name: element.name, city: element.location.city, star_rating: element.star_rating, image: element.image, latitude: element.location.latitude, longitude: element.location.longitude };
            this.markets.push(market);
          });
        }
      }
    })
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
  }

  ViewList() {
    this.activeMap = false
  }

  getMarkerClick(event: any) {
    let oldMarked = this.dataSource.findIndex(element => element.selected == "lightblue" );
    if(oldMarked !== -1){
      this.dataSource[oldMarked].selected = "";
    }
    let found = this.dataSource.findIndex(element => element.location.longitude == event.longitude && element.location.latitude == event.latitude);

    this.dataSource[found].selected = "lightblue";
    
  }
}
