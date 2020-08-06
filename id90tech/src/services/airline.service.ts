import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AirlineService {
    constructor(
        private http: HttpClient,
    ) { }

    getAirline(): Observable<any> {
        return this.http.get(
            "https://beta.id90travel.com/airlines.js"
        );
    }
}