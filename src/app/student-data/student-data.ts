import { Component, inject } from '@angular/core';
import serviceData from '../service'
import { Router  } from '@angular/router';

@Component({
  selector: 'app-student-data',
  imports: [],
  templateUrl: './student-data.html',
  styleUrl: './student-data.css',
})
export default class StudentData {
 dataStore = inject(serviceData);
 data:any =[];
 schools:any = [];
 departments:any = [];
 selectedstudents:any = [];

  ngOnInit(){
    this.dataStore.getStudent().subscribe((res):any=>{
      this.data = res;
      console.log(this.data)
        // this.schools = res.countries[0].states[0].schools;
        // console.log(this.schools);
    })
  }

  private router:any = inject(Router);
  viewDepartment(dept:any){
     console.log(dept);
    this.router.navigate(['/departments'],{
      state: {
        selecteddept: dept,
      }
    });
  }
}
