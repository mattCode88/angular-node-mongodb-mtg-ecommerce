import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteAcquistatePageComponent } from './carte-acquistate-page.component';

describe('CarteAcquistatePageComponent', () => {
  let component: CarteAcquistatePageComponent;
  let fixture: ComponentFixture<CarteAcquistatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteAcquistatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteAcquistatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
