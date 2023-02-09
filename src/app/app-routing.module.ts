import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductComponent},{path:'emplois',component:OffresEmploiComponentComponent},
  {path:'product/:id',component:DetailproductComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
