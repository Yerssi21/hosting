import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDesignComponent } from './upload-design.component';

describe('UploadDesignComponent', () => {
  let component: UploadDesignComponent;
  let fixture: ComponentFixture<UploadDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
