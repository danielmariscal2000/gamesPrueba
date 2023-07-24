import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { ProductListComponentComponent } from './product-list-component.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductListComponentComponent', () => {
  let component: ProductListComponentComponent;
  let fixture: ComponentFixture<ProductListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponentComponent]
    });
    fixture = TestBed.createComponent(ProductListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
