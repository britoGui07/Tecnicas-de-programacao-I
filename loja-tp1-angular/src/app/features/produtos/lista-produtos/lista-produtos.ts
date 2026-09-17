import { Component, computed, inject, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";
import { ProdutoService } from '../../../core/services/produto.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {

  private produtoService = inject(ProdutoService);

  private produtos = toSignal<Produto[], Produto[]>( this.produtoService.listar(), {initialValue: []});
  apenasPromo = signal(false);

  private route = inject(ActivatedRoute)

  constructor(){
    this.route.queryParamMap.subscribe(pm => {
      const promo = pm.get('promo')
      this.apenasPromo.set(promo === 'true')
    })
  }

  produtosExibidos = computed(() =>
   this.apenasPromo() ? this.produtos().filter(p => p.promo): this.produtos());

  alterarPromo(){
    this.apenasPromo.update(v => !v)
  }

onViewProduct(id: number){
  alert('Visualizando produto id: ' +id);
}

onAddProduct(produto: {id: number, qtd: number}){
  alert(' Adicionando produto: '+produto.id+' | quantidade: '+produto.qtd);
}
}
