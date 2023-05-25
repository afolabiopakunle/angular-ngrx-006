import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  action: 'deduct' | 'add' | 'reset' = null;

  @Output() changeCount = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  increaseCount() {
    this.action = 'add'
    this.changeCount.emit(this.action)
  }

  decreaseCount() {
    this.action = 'deduct'
    this.changeCount.emit(this.action)
  }

  resetCount() {
    this.action = 'reset'
    this.changeCount.emit(this.action)
  }
  
}