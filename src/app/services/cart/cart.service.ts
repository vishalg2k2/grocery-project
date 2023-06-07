import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { items } from 'src/app/shared/models/items';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  
  addToCart(items: items):void{
    let cartItem = this.cart.count.find(item => item.items.id === items.id);
    if(cartItem){
      this.changeQuantity(items.id, cartItem.quantity + 1);
      return;
    }
    this.cart.count.push(new CartItem(items));
  }

  removeFromCart(itemId:number): void{
    this.cart.count = 
    this.cart.count.filter(item => item.items.id != itemId);
  }

  changeQuantity(itemId:number, quantity:number){
    let cartItem = this.cart.count.find(item => item.items.id === itemId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}