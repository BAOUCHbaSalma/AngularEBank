import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBeneficiaireComponent } from './table-beneficiaire.component';

describe('TableBeneficiaireComponent', () => {
  let component: TableBeneficiaireComponent;
  let fixture: ComponentFixture<TableBeneficiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableBeneficiaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableBeneficiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
