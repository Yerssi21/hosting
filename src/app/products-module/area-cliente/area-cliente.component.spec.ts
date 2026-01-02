import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaClienteComponent } from './area-cliente.component';
import { provideRouter } from '@angular/router';

describe('AreaClienteComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaClienteComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AreaClienteComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
