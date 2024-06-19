import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { FoodDetailsComponent } from './food-details/food-details.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "cart", component: CartComponent},
  {path: "foodDetails", component: FoodDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
