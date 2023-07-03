import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { items } from 'src/app/shared/models/items';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  
  constructor() {
   // this.loadCartData();
  }

  
  addToCart(items: items):void{
    let cartItem = this.cart.count.find(item => item.items.Itemid === items.Itemid);
    if(cartItem){
      this.changeQuantity(items.Itemid, cartItem.quantity + 1);
      return;
    }
    this.cart.count.push(new CartItem(items));
   // this.saveCartData();
  }

  removeFromCart(itemId:number): void{
    this.cart.count = 
    this.cart.count.filter(item => item.items.Itemid != itemId);
    //this.saveCartData();
  }

  changeQuantity(itemId:number, quantity:number){
    let cartItem = this.cart.count.find(item => item.items.Itemid === itemId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
   // this.saveCartData();
    
  }

  getCart():Cart{
    return this.cart;
  }

//   private loadCartData(): void {
//     const cartData = localStorage.getItem('cart');
//     if (cartData) {
//       this.cart = JSON.parse(cartData);
//     }
//   }

//   private saveCartData(): void {
//     localStorage.setItem('cart', JSON.stringify(this.cart));
//   }
}