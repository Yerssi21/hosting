import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsCommonComponent } from './questions-common.component';

describe('QuestionsCommonComponent', () => {
  let component: QuestionsCommonComponent;
  let fixture: ComponentFixture<QuestionsCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionsCommonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
