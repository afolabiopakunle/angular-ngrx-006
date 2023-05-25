import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterInterface } from '../state/state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  count = 0;
  constructor(private store: Store<{count: CounterInterface}>) { }

  ngOnInit() {
  }

}