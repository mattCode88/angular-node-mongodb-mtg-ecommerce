import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaLogPageComponent } from './modifica-log-page.component';

describe('ModificaLogPageComponent', () => {
  let component: ModificaLogPageComponent;
  let fixture: ComponentFixture<ModificaLogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaLogPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaLogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
