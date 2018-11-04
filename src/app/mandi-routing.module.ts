import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MandiSearchComponent } from './mandi-search/mandi-search.component';

const routes: Routes = [
  { path: 'home', component: MandiSearchComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class MandiRoutingModule {
}
