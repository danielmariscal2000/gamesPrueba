// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgOptimizedImage } from "@angular/common";
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';
import { ProductDetailComponentComponent } from './components/product-detail-component/product-detail-component.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductService } from './services/product.service';
import { NgxPaginationModule } from 'ngx-pagination';
const routes: Routes = [
  { path: 'list', component: ProductListComponentComponent }, // Ruta para la página de inicio
  { path: 'detail/:id', component: ProductDetailComponentComponent }, // Ruta para la página de detalles
  // Agrega más rutas según sea necesario
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponentComponent,
    ProductDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgOptimizedImage,
    RouterModule.forRoot(routes),
    NgxPaginationModule
  ],
  exports: [RouterModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
