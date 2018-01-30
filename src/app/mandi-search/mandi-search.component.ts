import { Component, OnInit, Input } from '@angular/core';

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

  @Input() consumableName: string;
  @Input() villageOrTalukName: string;
  @Input() cityName: string;
  @Input() stateName: string;

  constructor() { }

  ngOnInit() {
  }

  public onSubmit() {
    alert('Consumable, villageOrTaluk, city and state entered is ' + this.consumableName +
    ' ' + this.villageOrTalukName + ' ' + this.cityName + ' ' + this.stateName);
  }

}
