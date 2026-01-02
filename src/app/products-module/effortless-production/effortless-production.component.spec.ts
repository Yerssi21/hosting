import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffortlessProductionComponent } from './effortless-production.component';
import { provideRouter } from '@angular/router';

describe('EffortlessProductionComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffortlessProductionComponent],
      providers: [provideRouter([])], 
    })
    .compileComponents();

  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EffortlessProductionComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
