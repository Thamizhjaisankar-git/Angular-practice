import { Component, inject,  } from '@angular/core';
import serviceData from '../service'
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-store',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './data-store.html',
  styleUrl: './data-store.css',
})
export default class DataStore {
  dataStore = inject(serviceData);
  //  result:any = this.dataStore.getUrlData();
  // ngOnInit(){
  //     this.dataStore.getUrlData().subscribe((data)=>{
  //       console.log(data);
  //       this.result = data;
  //     })

       product:any = new FormGroup({
          title: new FormControl ('',[Validators.required, Validators.minLength(4)]),
          description: new FormControl ('',[Validators.required]),
          price: new FormControl ('',Validators.required)
        })


        submit(){
          if(this.product.valid){
            console.log(this.product.value);
            this.dataStore.postData(this.product.value).subscribe({
              next: (response) => {
                console.log("Data added successfully!", response);
              },
              error: (error) => {
                console.log("Failed to upload data!", error);
              }
            })
          }
        }
  }


  // constructor(){
  //   this.dataStore.getUrlData().subscribe((data)=>{
  //     console.log(data);
  //   })
  // }
// }
