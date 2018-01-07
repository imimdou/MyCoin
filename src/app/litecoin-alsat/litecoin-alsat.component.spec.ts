import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitecoinAlsatComponent } from './litecoin-alsat.component';

describe('LitecoinAlsatComponent', () => {
  let component: LitecoinAlsatComponent;
  let fixture: ComponentFixture<LitecoinAlsatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitecoinAlsatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitecoinAlsatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
