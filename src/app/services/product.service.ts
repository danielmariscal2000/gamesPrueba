import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product.models';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  private products: Product[] = [];

  constructor(private http: HttpClient) {}

  fetchProducts() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Origin: 'http://localhost:4200', // Reemplaza con la URL de tu aplicación.
    });

    return this.http.get<Product[]>(this.apiUrl, { headers });
  }

  getProducts() {
    return this.products;
  }

  setProducts(products: Product[]) {
    this.products = products;
  }
}
