import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroGuard } from './components/cadastro/cadastro-guard/cadastro-guard.guard';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'cadastro', canDeactivate:[CadastroGuard], component: CadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
