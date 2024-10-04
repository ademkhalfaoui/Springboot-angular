import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllformateursComponent } from './allformateurs.component';

describe('AllformateursComponent', () => {
  let component: AllformateursComponent;
  let fixture: ComponentFixture<AllformateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllformateursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllformateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
