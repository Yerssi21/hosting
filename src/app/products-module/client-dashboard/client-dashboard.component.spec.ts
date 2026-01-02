import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDashboardComponent } from './client-dashboard.component';
import { provideRouter } from '@angular/router';

describe('ClientDashboardComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientDashboardComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ClientDashboardComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
