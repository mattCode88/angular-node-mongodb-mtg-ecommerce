import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquistiPendingPageComponent } from './acquisti-pending-page.component';

describe('AcquistiPendingPageComponent', () => {
  let component: AcquistiPendingPageComponent;
  let fixture: ComponentFixture<AcquistiPendingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcquistiPendingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquistiPendingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
