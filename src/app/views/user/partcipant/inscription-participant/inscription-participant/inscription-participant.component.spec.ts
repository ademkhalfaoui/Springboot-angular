import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionParticipantComponent } from './inscription-participant.component';

describe('InscriptionParticipantComponent', () => {
  let component: InscriptionParticipantComponent;
  let fixture: ComponentFixture<InscriptionParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscriptionParticipantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscriptionParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
