import { Component, inject,  } from '@angular/core';
import serviceData from '../service'
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-data-store',
  imports: [JsonPipe],
  templateUrl: './data-store.html',
  styleUrl: './data-store.css',
})
export default class DataStore {
  dataStore = inject(serviceData);
   result:any = this.dataStore.getUrlData();
  ngOnInit(){
      this.dataStore.getUrlData().subscribe((data)=>{
        console.log(data);
        this.result = data;
      })
  }
 

  // constructor(){
  //   this.dataStore.getUrlData().subscribe((data)=>{
  //     console.log(data);
  //   })
  // }
}
