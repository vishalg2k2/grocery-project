import { items } from "./items";

export class CartItem{
    constructor(items:items){
      this.items = items;  
    }
    items:items;
    quantity:number = 1;

    get price():number{
        return this.items.price * this.quantity;
    }
}