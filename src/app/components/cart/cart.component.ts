import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  quantity$ = this.scService.quantityActions$;
  total$ = this.scService.totalActions$;
  cart$ = this.scService.cartAction$;
  
  constructor(private scService: ShoppingCartService) { }

  ngOnInit(): void {
  }

}
