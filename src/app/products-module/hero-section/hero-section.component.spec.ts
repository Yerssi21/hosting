import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionComponent } from './hero-section.component';
import { provideRouter } from '@angular/router';

describe('HeroSectionComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionComponent],
      providers: [provideRouter([])], 
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeroSectionComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
