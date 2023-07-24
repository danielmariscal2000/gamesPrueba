import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailComponentComponent } from './product-detail-component.component';

describe('ProductDetailComponentComponent', () => {
  let component: ProductDetailComponentComponent;
  let fixture: ComponentFixture<ProductDetailComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailComponentComponent]
    });
    fixture = TestBed.createComponent(ProductDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ProductDetailComponentComponent', () => {
  let component: ProductDetailComponentComponent;
  let fixture: ComponentFixture<ProductDetailComponentComponent>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailComponentComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: {
              subscribe: (callback: (params: any) => void) => {
                callback({
                  get: (paramName: string) => '123', // Simular un ID de producto '123'
                });
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponentComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should retrieve the product ID from route parameters', () => {
    expect(component.productId).toBe('123');
  });
});
