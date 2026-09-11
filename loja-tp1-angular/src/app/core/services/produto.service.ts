import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../core/logger/logger.service';
import { Produto } from '../../model/produto';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

  private logger = inject(LoggerService);

  private readonly listaMock = <Produto[]>[
    {
      id: 1,
      nome: 'Mounjaro',
      preco: 1699.99,
      descricao: 'Canetas caras demais. Deus me livre.',
      imageUrl: 'images/mounjaro.jpg',
      promo: false,
      estado: 'novo',
    },
    {
      id: 2,
      nome: 'Ozempic',
      preco: 1299.94,
      descricao: 'Continuam caras. Deus continue me livrando.',
      imageUrl: 'images/ozempic.jpg',
      promo: false,
      estado: 'usado',
    },
    {
      id: 3,
      nome: 'Wegovy',
      preco: 2500.00,
      descricao: 'Misericórdia. Deus foi para floripa?',
      imageUrl: 'images/wegovy.jpg',
      promo: true,
      estado: 'esgotado',
    },
    {
      id: 4,
      nome: 'Novalgina',
      preco: 17.90,
      descricao: 'Será que bois sentem dor de cabeça?',
      imageUrl: 'images/novalgina.jpg',
      promo: false,
      estado: 'novo',
    },
];

  listar(): Observable<Produto[]>{
    this.logger.info("PRODUTO SERVICE - retornando lista de produto");
    return of(this.listaMock).pipe(delay(1000))
  }

  getById(id: number): Observable<Produto | undefined>{
    return of(this.listaMock.find(p => p.id ==id)).pipe(delay(500))
  }
}
