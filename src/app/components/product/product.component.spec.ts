import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';
import { Product } from './../../models/product.models';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});


describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
  });

  it('should receive the product input', () => {
    const testProduct: Product = {
      id: 457,
      title: 'The Third Age',
      platform: "Web Browser",
      genre: 'Strategy',
      thumbnail: 'https://www.freetogame.com/g/457/thumbnail.jpg',
      short_description: 'A free-to-play browser-based Strategy MMO game focused on story-based PvE gameplay!',
      game_url: 'https://www.freetogame.com/open/the-third-age',
      publisher: 'R2 Games',
      developer: 'R2 Games',
      release_date: '2019-04-29',
      freetogame_profile_url: 'https://www.freetogame.com/the-third-age'
    };
    component.product = testProduct;
    fixture.detectChanges();

    expect(component.product).toEqual(testProduct);
  });
});

