import { Injectable, inject  } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export default class Service {
  data:string[] = [];

  addData(item:string){
    this.data.push(item);
  }

  getData(){
    return [...this.data];
  }


  private http = inject(HttpClient);
  getUrlData(){
    return this.http.get('https://fakestoreapi.com/products/1');
  }
}
