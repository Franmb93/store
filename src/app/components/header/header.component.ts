import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  quantity$ = this.scService.quantityActions$;
  total$ = this.scService.totalActions$;
  cart$ = this.scService.cartAction$;

  constructor(private scService: ShoppingCartService) { }

  ngOnInit(): void {
  }

}
