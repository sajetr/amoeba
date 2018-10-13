import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { StatesService } from '../services/states.service';
import { State } from '../services/state';

@Component({
  selector: 'app-mandi-search',
  templateUrl: './mandi-search.component.html',
  styleUrls: ['./mandi-search.component.css']
})
export class MandiSearchComponent implements OnInit {

  /* TODO: refactor the below. Have constant variables to provide
     the placeholder and the text name. */
  consumable = 'Fruit, vegetable, etc';
  villageOrTaluk = 'Village or Taluk';
  city = 'City';
  state = 'State';
  mandi = 'Mandi';
  submit = 'Submit';

  consumableName: string;
  villageOrTalukName: string;
  cityName: string;
  stateName: State;
  states: State[];

  search = (stateName: Observable<string>) =>
    stateName.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.states.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
        .slice(0, 10))
    )

  formatter = (formattedResultState: State) => formattedResultState.name;

  constructor(private statesService: StatesService) {}

  ngOnInit() {
    this.states = this.statesService.getStates();
  }

  public onSubmit() {
    alert('Consumable, villageOrTaluk, city and state entered is ' + this.consumableName +
    ' ' + this.villageOrTalukName + ' ' + this.cityName + ' ' + this.stateName.name);
  }

}
