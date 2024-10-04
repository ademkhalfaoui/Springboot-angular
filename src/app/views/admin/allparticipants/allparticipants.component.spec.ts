import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllparticipantsComponent } from './allparticipants.component';

describe('AllparticipantsComponent', () => {
  let component: AllparticipantsComponent;
  let fixture: ComponentFixture<AllparticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllparticipantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllparticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
