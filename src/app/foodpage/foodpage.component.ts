import { Component, OnInit } from '@angular/core';
import {items} from  '../shared/models/items';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../services/items/items.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
items!:items;

constructor(private activatedRoute:ActivatedRoute,
  private itemService: ItemsService,
  private cartService: CartService,
  private router: Router) { 
  activatedRoute.params.subscribe((params) => {
    if(params['id'])
    this.items = itemService.getItemsById(params['id']);
  })

  }

ngOnInit(): void {
}
addToCart(){
  this.cartService.addToCart(this.items);
  this.router.navigateByUrl('/cart-page');
}

}
