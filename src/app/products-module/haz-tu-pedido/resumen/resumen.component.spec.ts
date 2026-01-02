import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenComponent } from './resumen.component';
import { provideRouter } from '@angular/router';

describe('ResumenComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ResumenComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
