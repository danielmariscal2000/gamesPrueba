import { Product } from '../../models/product.models';
import { ProductService } from '../../services/product.service';
import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css'],
})
export class ProductListComponentComponent implements OnInit {
  products: Product[] = [];
  aux_Products: Product[] = [];
  src:string="";
  page!:number;
  constructor(private productService: ProductService) {}

  onFilterChange(event: any) {
    const filterOption = event.target.value;
    if (filterOption === 'Windows' || filterOption === 'PC (Windows)') {
      this.products = this.aux_Products.filter(
        (e) => e.platform == 'PC (Windows)'
      );
    } else if (filterOption === 'Web Browser') {
      this.products = this.aux_Products.filter((e) => e.platform == 'Web Browser');
    } else if (filterOption === 'Todos') {
      this.products = this.aux_Products;
    }
  }

  onFilterGenre(event: any) {
    const filterOption = event.target.value;
    if (filterOption === 'Todos') {
      this.products = this.aux_Products;
    } else {
      this.products = this.aux_Products.filter((e) => e.genre === filterOption);
    }
  }
  search(event:any){
    this.src=event.target.value;
    if(this.src!=""){
      this.products = this.aux_Products.filter((e) => e.title.toLowerCase().includes(this.src.toLowerCase()));
    }
    else{
      this.products=this.aux_Products;
    }
  }  
  pageChanged(event:any){
    this.page=1;
  }
  ngOnInit() {
    this.productService.fetchProducts().subscribe((data) => {
      this.products = data;
      this.aux_Products = data;
      this.productService.setProducts(data);
    });
  }
}
