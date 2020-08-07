import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HotelParam } from '../interfaces/Hotel.interface';

@Injectable({
    providedIn: 'root'
})

export class HotelService {
    constructor(
        private http: HttpClient,
    ) { }

    getHostel(params: HotelParam): Observable<any> {

        return this.http.get(
            "https://beta.id90travel.com/api/v1/hotels.json?destination="+params.destiny+"&checkin="+params.checkin+"&checkout="+params.checkout+"&guests[]="+params.capacity
        );
    }
}