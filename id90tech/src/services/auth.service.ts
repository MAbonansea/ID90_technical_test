import { AuthParam } from '../interfaces/Auth.interface'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  
export class AuthService{
    constructor(
        private http: HttpClient,
      ) { }

      auth(params: AuthParam): Observable<any> {
        return this.http.post(
          "https://beta.id90travel.com/api/v1/sessions", params
        );
      }
    

}