import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-pagina-inexistente',
  imports: [],
  templateUrl: './pagina-inexistente.html',
  styleUrl: './pagina-inexistente.css',
})
export class PaginaInexistente {
  private router = inject(Router)

  voltarHome(){
    this.router.navigate(['/'])
  }
}
