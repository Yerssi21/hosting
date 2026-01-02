import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutComponent } from './default-layout.component';
import { provideRouter } from '@angular/router';

describe('DefaultLayoutComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultLayoutComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DefaultLayoutComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
