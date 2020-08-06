import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { AuthEffect } from '../store/effects/login.effects';
import {AirlineEffect } from '../store/effects/airline.effects'
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
import { FlyListComponent } from './fly-list/fly-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FlyListComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([AuthEffect,AirlineEffect]),
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
    MatSnackBarModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
