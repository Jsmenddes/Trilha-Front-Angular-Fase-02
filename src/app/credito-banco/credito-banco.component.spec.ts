import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoBancoComponent } from './credito-banco.component';

describe('CreditoBancoComponent', () => {
  let component: CreditoBancoComponent;
  let fixture: ComponentFixture<CreditoBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditoBancoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditoBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
