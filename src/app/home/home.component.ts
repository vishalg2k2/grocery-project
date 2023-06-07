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
  items:items[]=[];
  constructor(private itemService:ItemsService, private route: ActivatedRoute ){}
 
 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
        this.items = this.itemService.getAll().filter(items=> 
        items.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      else if (params['tag'])
      this.items = this.itemService.getAllItemsByTag(params['tag']);
      else
         this.items=this.itemService.getAll();
      
    })
    
    
  }
  signupsubmit(){
    console.log(1);
  //this.route.navigate(['auth']);
  }


}
