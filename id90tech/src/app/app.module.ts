import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { AuthEffect } from '../store/effects/login.effects';
import {AirlineEffect } from '../store/effects/airline.effects';
import { HotelEffect} from '../store/effects/hotel.effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../store/reducers/index';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule} from  '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SearchHotelsComponent } from './hotels-search/hotels-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { AgmCoreModule } from '@agm/core';
import {MatTableModule} from '@angular/material/table';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchHotelsComponent,
    HotelsListComponent,
    
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([AuthEffect,AirlineEffect,HotelEffect]),
    StoreModule.forRoot(reducer),
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatToolbarModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatGridListModule,
    AppRoutingModule,
    FontAwesomeModule,
    FlexLayoutModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCAFGbbOZHrav7CPHSbBgS9Zo9P1QUzq_s'
      
    }),
    AgmSnazzyInfoWindowModule
    
    
  ],
  providers: [MatDatepickerModule,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
