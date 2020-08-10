import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchHotelsComponent } from './hotels-search/hotels-search.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';

  const routes: Routes = [
   { path:'', redirectTo:'/login', pathMatch:'full' },
   { path:'login', component: LoginComponent },
   { path:'hotels', component: HotelsListComponent , pathMatch:'full' },
   { path:'search', component: SearchHotelsComponent, pathMatch:'full' }
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
