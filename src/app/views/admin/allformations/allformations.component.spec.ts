import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllformationsComponent } from './allformations.component';

describe('AllformationsComponent', () => {
  let component: AllformationsComponent;
  let fixture: ComponentFixture<AllformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllformationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
