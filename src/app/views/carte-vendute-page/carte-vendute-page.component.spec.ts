import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteVendutePageComponent } from './carte-vendute-page.component';

describe('CarteVendutePageComponent', () => {
  let component: CarteVendutePageComponent;
  let fixture: ComponentFixture<CarteVendutePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteVendutePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteVendutePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
