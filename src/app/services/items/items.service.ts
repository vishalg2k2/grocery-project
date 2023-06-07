import { Injectable } from '@angular/core';
import { items } from '../../shared/models/items';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  getItemsById(id: number): items{
    return this.getAll().find(items => items.id == id)!;
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 15},
      { name: 'Chips', count: 1 },
      { name: 'Snacks', count: 5},
      { name: 'Softdrinks', count: 2},
      { name: 'Vegetables', count: 2 },
      { name: 'Biscuits', count: 2 },
      { name: 'Beverage', count: 2 },
      { name: 'Haldiram', count: 1 },
    ];
  }

  getAllItemsByTag(tag: string): items[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(items=> items.tags?.includes(tag));
  }


  getAll():items[]{

    return [
      {
        id: 1,
        name: 'Lays',
        deliveryTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/layss.jpg',
        tags: ['Chips', 'Snacks'],
      },
      {
        id: 2,
        name: 'Mirinda',
        price: 30,
        deliveryTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/drinks_mir.jpg',
        tags: ['Beverage', 'Softdrinks'],
      },
      {
        id: 3,
        name: 'Onions(per Kg)',
        price: 20,
        deliveryTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/onion.jpg',
        tags: ['Vegetables'],
      },
      {
        id: 4,
        name: 'Potatoes(per Kg)',
        price: 15,
        deliveryTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/potatoes.jpg',
        tags: ['Vegetables'],
      },
      {
        id: 5,
        name: 'Haldiram Bhujia',
        price: 30,
        deliveryTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/haldiram.jpg',
        tags: ['Snacks', 'Haldiram'],
      },
      {
        id: 6,
        name: 'Oreo',
        price: 20,
        deliveryTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/oreo.jpg',
        tags: ['Biscuits','Snacks'],
      },
      {
        id: 7,
        name: 'Jimjam',
        price: 20,
        deliveryTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/jimjam.jpg',
        tags: ['Biscuits','Snacks'],
      },
      {
        id: 8,
        name: 'Redbull',
        price: 125,
        deliveryTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/redbull.jpg',
        tags: ['Beverage', 'Softdrinks'],
      },
      {
        id: 9,
        name: 'Kurkure',
        price: 10,
        deliveryTime: '5-10',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/Kurkure.jpg',
        tags: ['Snacks'],
      },

    ];
  }
  
}
