import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroComponent } from './intro.component';
import { provideRouter } from '@angular/router';

describe('IntroComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

  });

  it('should create', () => {
    const fixture = TestBed.createComponent(IntroComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
