import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CreateFoodComponent } from './create-food/create-food.component';
import { EditFoodComponent } from './edit-food/edit-food.component';

const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:"create", component:CreateFoodComponent},
  {path:"edit/:id", component:EditFoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
