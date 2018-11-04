import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MandiSearchComponent } from './mandi-search/mandi-search.component';
import { MandiRoutingModule } from './mandi-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MandiSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    MandiRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
