import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>(); // Con esto declaramos un evento personalizado con el que podremos notificar al padre de que se ha realizado una compra. 
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
   this.addToCart.emit(this.product); // Emite el evento al resto del programa, necesitando subscribirse aquellos que quieran utilizarlo, en este caso el products. 

  }
}
