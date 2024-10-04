import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouslesfichiersComponent } from './touslesfichiers.component';

describe('TouslesfichiersComponent', () => {
  let component: TouslesfichiersComponent;
  let fixture: ComponentFixture<TouslesfichiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TouslesfichiersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TouslesfichiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
