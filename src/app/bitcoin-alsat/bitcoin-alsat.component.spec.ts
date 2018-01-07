import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinAlsatComponent } from './bitcoin-alsat.component';

describe('BitcoinAlsatComponent', () => {
  let component: BitcoinAlsatComponent;
  let fixture: ComponentFixture<BitcoinAlsatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinAlsatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinAlsatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
