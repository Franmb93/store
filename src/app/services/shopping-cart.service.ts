import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  products: Product[] = [];

  private cartSubject = new BehaviorSubject<Product[]>([]); // Observa lo que hay en el carrito. 
  private totalSubject = new BehaviorSubject<number>(0); // Observa la cantidad que hay en el carrito
  private quantitySubject = new BehaviorSubject<number>(0);

  // Para devolver estos observables a la aplicacion para quien los quiera consumir
  // tenemos que cerar unos metodos getter, que son publicos. 
  get cartAction$(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }   // El signo de dolar explicitamente declara que es observable por convenncion

  get totalActions$(): Observable<number> {
    return this.totalSubject.asObservable();
  }

  get quantityActions$(): Observable<number> {
    return this.quantitySubject.asObservable();
  }

  // Necesitamos unos metodos, privados tambien
  // Para calcular el total de la orden que los cleintes compran. 
  private calcTotal(): void {
    const total = this.products.reduce((acumulador, producto) => acumulador += (producto.price * producto.qty), 0);

    // Notificar at Observable.
    this.totalSubject.next(total);
  }

  private cantidadProductosAdded(): void {
    // Se comenta para que en el detalle no salga el mismo producto repetido, sino agrupado
    // const quantity = this.products.length;

    const quantity = this.products.reduce((acc, prod) => acc+= prod.qty, 0);

    this.quantitySubject.next(quantity);
  }

  private addToCart(product: Product): void {
    const findProduct = this.products.find( ({ id })=> id === product.id);

    if(findProduct){
      findProduct.qty++;
    } else{
      // Spread operator
      this.products.push({...product, qty: 1});
    }

    


    this.cartSubject.next(this.products);
  }

  // Comot odso los metodos son privados, necesitamos también un método publico para actualziar el carrito.
  updateCart(product: Product): void {
    this.addToCart(product);
    this.calcTotal();
    this.cantidadProductosAdded();
  }

  constructor() { }

  resetCart():void{
    this.cartSubject.next([]);
    this.totalSubject.next(0);
    this.quantitySubject.next(0);
    this.products = [];
  }
}
