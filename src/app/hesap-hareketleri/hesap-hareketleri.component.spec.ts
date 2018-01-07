import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HesapHareketleriComponent } from './hesap-hareketleri.component';

describe('HesapHareketleriComponent', () => {
  let component: HesapHareketleriComponent;
  let fixture: ComponentFixture<HesapHareketleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HesapHareketleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HesapHareketleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
