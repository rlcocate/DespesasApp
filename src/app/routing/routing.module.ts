import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { ListComponent } from '../list/list.component'; // 2 pontos é pra procurar o diretório correto.
import { AddComponent } from '../add/add.component'; // 2 pontos é pra procurar o diretório correto.

const routes: Routes = [
  {  path: '', redirectTo: '/list', pathMatch: 'full' },
  {  path: 'list', component: ListComponent },
  {  path: 'add', component: AddComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule {


}
