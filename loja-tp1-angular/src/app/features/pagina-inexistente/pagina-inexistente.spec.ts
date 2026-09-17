import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInexistente } from './pagina-inexistente';

describe('PaginaInexistente', () => {
  let component: PaginaInexistente;
  let fixture: ComponentFixture<PaginaInexistente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaInexistente],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaInexistente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
