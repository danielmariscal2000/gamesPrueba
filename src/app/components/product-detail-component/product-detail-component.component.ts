import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../models/product.models';

@Component({
  selector: 'app-product-detail-component',
  templateUrl: './product-detail-component.component.html',
  styleUrls: ['./product-detail-component.component.css']
})
export class ProductDetailComponentComponent implements OnInit {
  productId: string = "";
  product: Product = {} as Product; // Inicializar products como un objeto vacío de tipo Product

  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  
  ngOnInit(): void {
    // Recuperar el ID del producto de los parámetros de la ruta
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id') ?? ''; // Asignar cadena vacía si es null 
    });

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Origin': 'http://localhost:4200' // Reemplaza con la URL de tu aplicación.
    });

    this.http.get<Product>(`https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/game?id=${this.productId}`, { headers })
    .subscribe((data) => {
      this.product = data;
    });
   
  }
}
