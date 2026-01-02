import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoporteEmpresarialComponent } from './soporte-empresarial.component';
import { provideRouter } from '@angular/router';

describe('SoporteEmpresarialComponent', () => {

  beforeEach(async () => { 
    await TestBed.configureTestingModule({
      imports: [SoporteEmpresarialComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SoporteEmpresarialComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
