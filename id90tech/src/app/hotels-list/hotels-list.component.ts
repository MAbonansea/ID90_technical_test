import { Component, OnInit, SimpleChange } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Store, select } from '@ngrx/store';
import * as state from '../../store/reducers';
import { takeUntil } from 'rxjs/operators';
import { HotelInterface } from 'src/interfaces/Hotel.interface';
import { AgmInfoWindow } from '@agm/core';

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
  pending: boolean

  constructor(private store: Store) { }

  private hotels$ = this.store.pipe(select(state.selectHotel));
  private hotelsPending$ = this.store.pipe(select(state.selectHotelPending));
  private ngUnsubscribe = new Subject();

  private previous_info_window: AgmInfoWindow;

  ngOnInit() {
    this.initMarkert = {
      latitude: null,
      longitude: null
    }
    
    this.markets = [];
    this.fecthHotels();
    this.fecthHotelsPending();
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
        this.dataSource = this.dataSource.map(element => ({ ...element, selected: "", open: false }))
        this.initMarkert.longitude = hotels[0].location.longitude;
        this.initMarkert.latitude = hotels[0].location.latitude;
        this.displayedColumns = ["name", "star_rating", "total", "location_description","action"];
        if (this.dataSource) {
          this.dataSource.forEach(element => {
            let market = { name: element.name, city: element.location.city, star_rating: element.star_rating, image: element.image, latitude: element.location.latitude, longitude: element.location.longitude, open: false };
            this.markets.push(market);
          });
        }
      }
    })
  }

  getMarkerClick(event: any, infowindow: AgmInfoWindow) {
    if (this.previous_info_window) this.previous_info_window.close();
    this.previous_info_window = infowindow;
    let oldMarked = this.dataSource.findIndex(element => element.selected == "lightblue" );
    if(oldMarked !== -1){
      this.dataSource[oldMarked].selected = "";
    }
    let found = this.dataSource.findIndex(element => element.location.longitude == event.longitude && element.location.latitude == event.latitude);
    this.dataSource[found].selected = "lightblue";
  }

  openInMap(marker) {
    const item = this.dataSource.findIndex(element => element.location.longitude == marker.location.longitude && element.location.latitude == marker.location.latitude);
    this.dataSource[item].open = true;    
    this.getMarkerClick({ longitude: marker.location.longitude, latitude: marker.location.latitude }, this.previous_info_window);
  }

  isMarkerOpen(marker) {
    const item = this.dataSource.find(element => element.location.longitude == marker.longitude && element.location.latitude == marker.latitude);
    return item.open;
  }
  
  ngOnDestroy() {
    this.ngUnsubscribe.next();
  }

}
