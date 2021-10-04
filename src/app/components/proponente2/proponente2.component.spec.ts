import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Proponente2Component } from './proponente2.component';

describe('Proponente2Component', () => {
  let component: Proponente2Component;
  let fixture: ComponentFixture<Proponente2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proponente2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Proponente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
