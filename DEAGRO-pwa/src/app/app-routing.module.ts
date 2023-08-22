import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroBeneficiarioComponent } from './components/cadastro-beneficiario/cadastro-beneficiario.component';
import { ListaBeneficiariosComponent } from './components/lista-beneficiarios/lista-beneficiarios.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cadastro'},
  { path: 'cadastro', component: CadastroBeneficiarioComponent},
  { path: 'listar', component: ListaBeneficiariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
