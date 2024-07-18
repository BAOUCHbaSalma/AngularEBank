import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebeneficiaireComponent } from './updatebeneficiaire.component';

describe('UpdatebeneficiaireComponent', () => {
  let component: UpdatebeneficiaireComponent;
  let fixture: ComponentFixture<UpdatebeneficiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatebeneficiaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatebeneficiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
