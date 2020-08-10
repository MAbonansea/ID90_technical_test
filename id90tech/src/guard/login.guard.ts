import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class LoginGuard implements CanActivate {
    constructor(
        private router:Router
        ){

    }
    public canActivate(){
        const isLogged = localStorage.getItem("is_logged");
        if(isLogged) return this.router.navigate(['/search']);
        return true
    }
}