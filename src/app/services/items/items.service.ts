import { Injectable } from '@angular/core';
import { items } from '../../shared/models/items';
import { Tag } from '../../shared/models/Tag';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }
  private baseurl = 'http://127.0.0.1:8000/groc/';

  getItemsById(id: number): Observable<items>{
    return this.http.get<items>(this.baseurl+"itembyid/"+id);
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All'},
      { name: 'Snacks'},
      { name: 'Softdrinks'},
      { name: 'Vegetables' },
      { name: 'Biscuits' }
    ];
  }

  getAllItemsByTag(tagname: string): Observable<items[]> {
    return this.http.get<items[]>(this.baseurl+"tagdata/"+tagname);
  }


  getAll():Observable<items[]>{

    return this.http.get<items[]>(this.baseurl+"pullitems");
  }
  
}
