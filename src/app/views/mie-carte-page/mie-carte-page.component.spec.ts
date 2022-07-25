import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MieCartePageComponent } from './mie-carte-page.component';

describe('MieCartePageComponent', () => {
  let component: MieCartePageComponent;
  let fixture: ComponentFixture<MieCartePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MieCartePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MieCartePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
