import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffortlessProductionComponent } from './effortless-production.component';

describe('EffortlessProductionComponent', () => {
  let component: EffortlessProductionComponent;
  let fixture: ComponentFixture<EffortlessProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffortlessProductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffortlessProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
