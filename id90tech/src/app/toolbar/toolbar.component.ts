import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor( 
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('is_logged');
    this.router.navigate(['/']);
  }

}
