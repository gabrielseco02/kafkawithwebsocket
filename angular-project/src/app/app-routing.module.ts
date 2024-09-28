import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControleArquivoComponent } from './features/controle-arquivo/controle-arquivo.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: 'controle-arquivo', component: ControleArquivoComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
