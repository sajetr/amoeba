import { Injectable } from '@angular/core';
import { STATES } from './StaticStates';
import { State } from './state';


@Injectable({
  providedIn: 'root'
})
export class StatesService {
  getStates(): State[] {
    return STATES;
  }
}
