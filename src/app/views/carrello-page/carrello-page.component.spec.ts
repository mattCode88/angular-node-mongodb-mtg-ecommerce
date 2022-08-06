import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrelloPageComponent } from './carrello-page.component';

describe('CarrelloPageComponent', () => {
  let component: CarrelloPageComponent;
  let fixture: ComponentFixture<CarrelloPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrelloPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrelloPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
