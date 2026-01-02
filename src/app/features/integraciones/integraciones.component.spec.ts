import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegracionesComponent } from './integraciones.component';
import { provideRouter } from '@angular/router';

describe('IntegracionesComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegracionesComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(IntegracionesComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
