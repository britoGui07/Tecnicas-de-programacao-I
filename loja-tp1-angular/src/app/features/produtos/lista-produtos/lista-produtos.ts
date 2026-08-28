import { Component, computed, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from '../card-produto/card-produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {

  apenasPromo = signal(false)

  produtosExibidos = computed(() => this.apenasPromo() ? this.produtos.filter(p => p.promo) : this.produtos)

  alterarPromo(){
    this.apenasPromo.update(v => !v)
  }

  produtos = <Produto[]>[
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
    
  ]

  onViewProduct(id: number){
    alert(`Visualizando produto id ${id}`)
  }
  onAddProduct(produto: {id: number, qtd: number}){
    alert('Adicionado produto '+produto.id+' | quantidade: '+produto.qtd)
  }

}
