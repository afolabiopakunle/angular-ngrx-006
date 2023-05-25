import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterInterface } from '../state/state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  count$: Observable<CounterInterface>
  constructor(private store: Store<{count: CounterInterface}>) { }

  ngOnInit() {
    this.count$ = this.store.select('count')
  }

}