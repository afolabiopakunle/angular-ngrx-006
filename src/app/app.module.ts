import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    StoreModule.forRoot({count: counterReducer}),
  ],
  declarations: [AppComponent, CounterComponent, CounterButtonsComponent, CounterOutputComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }