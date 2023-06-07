import { CartItem } from "./CartItem";

export class Cart{
    count:CartItem[] = [];

    get totalPrice(): number{
        let totalPrice = 0;
        this.count.forEach(item => {
            totalPrice += item.price;
        });

        return totalPrice;
    }
}