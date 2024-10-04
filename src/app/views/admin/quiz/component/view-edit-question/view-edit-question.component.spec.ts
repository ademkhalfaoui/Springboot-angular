import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditQuestionComponent } from './view-edit-question.component';

describe('ViewEditQuestionComponent', () => {
  let component: ViewEditQuestionComponent;
  let fixture: ComponentFixture<ViewEditQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewEditQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewEditQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
