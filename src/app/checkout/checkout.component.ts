import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Store } from '../interfaces/store';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


  model = {
    name: '',
    store: '',
    shippingAddress: '',
    city: ''
  }

  stores: Store[] = [];
  
  isDelivery: boolean = true;
  
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getStores();
  }

  onPickDelivery(value: boolean) : void{
    this.isDelivery = value;
  }

  private getStores(): void{
        this.service.getStores().pipe(
      tap((stores: Store[]) => this.stores = stores)
    ).subscribe();
  }

}
