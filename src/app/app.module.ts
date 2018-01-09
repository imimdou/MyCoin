import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BitcoinAlsatComponent } from './bitcoin-alsat/bitcoin-alsat.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LitecoinAlsatComponent } from './litecoin-alsat/litecoin-alsat.component';
import { HesapHareketleriComponent } from './hesap-hareketleri/hesap-hareketleri.component';

import { SocketService } from "./socket.service";

@NgModule({
  declarations: [
    AppComponent,
    BitcoinAlsatComponent,
    LitecoinAlsatComponent,
    HesapHareketleriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }