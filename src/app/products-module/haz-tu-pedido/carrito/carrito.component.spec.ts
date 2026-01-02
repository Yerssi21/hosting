import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoComponent } from './carrito.component';
import { provideRouter } from '@angular/router';

describe('CarritoComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CarritoComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
