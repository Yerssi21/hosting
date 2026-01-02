import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaOnlineComponent } from './venta-online.component';
import { provideRouter } from '@angular/router';

describe('VentaOnlineComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentaOnlineComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(VentaOnlineComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
