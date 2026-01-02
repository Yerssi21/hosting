import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditorComponent } from './product-editor.component';
import { provideRouter } from '@angular/router';

describe('ProductEditorComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductEditorComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ProductEditorComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
