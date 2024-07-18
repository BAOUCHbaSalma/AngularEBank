import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBenefciaireComponent } from './table-beneficiaire.component';

describe('TableBeneficiaireComponent', () => {
  let component: TableBenefciaireComponent;
  let fixture: ComponentFixture<TableBenefciaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableBenefciaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableBenefciaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
