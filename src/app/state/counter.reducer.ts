import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";
import { initialState } from "./state";

const _counterReducer = createReducer(initialState,
  on(increment, state => ({
    ...state,
    count: state.count + 1,
  })),
  on(decrement, state => ({
    ...state,
    count: state.count - 1,
  })),
  on(reset, state => ({
    ...state,
    count: 0,
  })));


export function counterReducer(state, action) {
  return _counterReducer(state, action);
}