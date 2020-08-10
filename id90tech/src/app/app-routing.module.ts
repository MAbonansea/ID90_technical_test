import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchHotelsComponent } from './hotels-search/hotels-search.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { AuthGuard } from 'src/guard/auth.guard';
import { LoginGuard } from 'src/guard/login.guard';

  const routes: Routes = [
   { path:'', redirectTo:'/login', pathMatch:'full' },
   { path:'login', component: LoginComponent , canActivate:[LoginGuard] },
   { path:'hotels', component: HotelsListComponent , pathMatch:'full' , canActivate:[AuthGuard] },
   { path:'search', component: SearchHotelsComponent, pathMatch:'full', canActivate:[AuthGuard] }
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
