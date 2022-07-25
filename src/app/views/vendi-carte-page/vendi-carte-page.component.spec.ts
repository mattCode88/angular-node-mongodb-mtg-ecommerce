import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendiCartePageComponent } from './vendi-carte-page.component';

describe('VendiCartePageComponent', () => {
  let component: VendiCartePageComponent;
  let fixture: ComponentFixture<VendiCartePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendiCartePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendiCartePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
