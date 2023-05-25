import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  count = 0;

  countChanged(data) {
    switch(data) {
      case 'add': 
      return this.count++;
      break;
      case 'deduct': 
      return this.count--
      break;
      case 'reset':
      return this.count = 0;
      default: this.count = 0
      
    }
  }

}