import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchBidsComponent } from './fetch-bids/fetch-bids.component';

const routes: Routes = [{ path: 'fetch-bids', component: FetchBidsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
