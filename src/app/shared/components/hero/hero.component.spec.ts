import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent } from './hero.component';
import { provideRouter } from '@angular/router';

describe('HeroComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
