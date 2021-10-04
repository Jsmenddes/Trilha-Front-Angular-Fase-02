import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponenteComponent } from './proponente.component';

describe('ProponenteComponent', () => {
  let component: ProponenteComponent;
  let fixture: ComponentFixture<ProponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
