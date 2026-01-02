import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordComponent } from './forgot-password.component';
import { provideRouter } from '@angular/router';

describe('ForgotPasswordComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ForgotPasswordComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
