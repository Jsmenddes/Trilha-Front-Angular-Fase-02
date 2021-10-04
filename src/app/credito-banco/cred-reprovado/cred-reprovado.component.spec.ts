import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredReprovadoComponent } from './cred-reprovado.component';

describe('CredReprovadoComponent', () => {
  let component: CredReprovadoComponent;
  let fixture: ComponentFixture<CredReprovadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredReprovadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredReprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
