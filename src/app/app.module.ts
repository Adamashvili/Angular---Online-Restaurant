import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { DirectDirective } from './direct.directive';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { InterService } from './inter.service';
import { MiniCategoriesComponent } from './mini-categories/mini-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    DirectDirective,
    FilterComponent,
    FoodDetailsComponent,
    FooterComponent,
    LoadingComponent,
    MiniCategoriesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
