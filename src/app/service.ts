import { Injectable, inject  } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { of, Observable } from 'rxjs';
import schoolsData  from "../assets/schoolsData.json"

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

  postData(payload:any){
    return this.http.post('https://fakestoreapi.com/products/1',payload);
  }

  getStudent():Observable<any>{
    return of(schoolsData);
    // return this.http.get<any>('assets/schoolsData.json');
  }

}

