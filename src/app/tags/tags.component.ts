import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { ItemsService } from '../services/items/items.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags?:String[];
  @Input()
  justifyContent:string = 'center';
  tags?:Tag[];
  constructor(private itemService:ItemsService){}
  ngOnInit(): void {
    if(!this.foodPageTags)
     this.tags = this.itemService.getAllTags();
  }
}
