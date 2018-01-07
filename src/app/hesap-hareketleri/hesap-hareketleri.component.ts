import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hesap-hareketleri',
  templateUrl: './hesap-hareketleri.component.html',
  styleUrls: ['./hesap-hareketleri.component.css']
})
export class HesapHareketleriComponent implements OnInit {

  title = 'Hesap Hareketleri';

  constructor() {
  	this.title = 'Hesap Hareketleri'; }

  ngOnInit() {
  	this.title = 'Hesap Hareketleri';
  }

}
