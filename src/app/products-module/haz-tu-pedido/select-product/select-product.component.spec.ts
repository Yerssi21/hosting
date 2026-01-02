import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProductComponent } from './select-product.component';
import { provideRouter } from '@angular/router';

describe('SelectProductComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectProductComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SelectProductComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
