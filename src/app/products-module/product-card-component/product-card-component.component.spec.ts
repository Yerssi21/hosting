import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponentComponent } from './product-card-component.component';
import { provideRouter } from '@angular/router';

describe('ProductCardComponentComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponentComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ProductCardComponentComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
