import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';
import { CounterInterface } from '../state/state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  constructor(private store: Store<CounterInterface>) { }

  ngOnInit() {
  }

  increaseCount() {
    this.store.dispatch(increment());
  }

  decreaseCount() {
    this.store.dispatch(decrement());
  }

  resetCount() {
    this.store.dispatch(reset());
  }
  
}