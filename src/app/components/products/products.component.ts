import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService,
    private shoppingService: ShoppingCartService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .pipe(
        tap((products: Product[]) => this.products = products)
      )
      .subscribe();

  }

  addToCart(product: Product): void {
    this.shoppingService.updateCart(product);
  }

}
