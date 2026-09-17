import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ListaProdutos } from './features/produtos/lista-produtos/lista-produtos';
import { ProdutoDetalhe } from './features/produtos/produto-detalhe/produto-detalhe';
import { Sobre } from './features/sobre/sobre';
import { PaginaInexistente } from './features/pagina-inexistente/pagina-inexistente';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'produtos', component: ListaProdutos},
    {path: 'produtos/id', component: ProdutoDetalhe},
    {path: 'sobre', component: Sobre},
    {path: '404', component: PaginaInexistente},
    {path: '**', redirectTo: '/404'},
];
