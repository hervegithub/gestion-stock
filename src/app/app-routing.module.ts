import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import { NewProductComponent } from './new-product/new-product.component';



const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "board", component: BoardComponent},
  {path: "new-product", component: NewProductComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
