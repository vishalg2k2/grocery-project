import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items/items.service';
import { Router } from '@angular/router';
import { items } from '../shared/models/items';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products:items[]=[];
  constructor(private itemService:ItemsService, private route: ActivatedRoute ){}
 
 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm']){
        // this.products = this.itemService.getAll().filter(products=> 
        // items.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
        this.products = this.products.filter(product => 
        product.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      }
      else if (params['tag']){
        this.itemService.getAllItemsByTag(params['tag']).subscribe(res=>{
          this.products=res;
        });
      }
      else{
         this.itemService.getAll().subscribe(res=>{
          this.products=res;
         });
      }
      
    })
    
    this.itemService.getAll().subscribe(response => {
      this.products = response
    })
  }
  signupsubmit(){
    console.log(1);
  //this.route.navigate(['auth']);
  }


}
