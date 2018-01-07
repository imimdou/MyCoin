import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { BitcoinAlsatComponent } from '../bitcoin-alsat/bitcoin-alsat.component';
import { LitecoinAlsatComponent } from '../litecoin-alsat/litecoin-alsat.component';
import { HesapHareketleriComponent } from '../hesap-hareketleri/hesap-hareketleri.component';

const routes: Routes = [
  { path: 'bitcoin-alsat', component: BitcoinAlsatComponent },
  { path: 'litecoin-alsat', component: LitecoinAlsatComponent },
  { path: 'hesap-hareketleri', component: HesapHareketleriComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }