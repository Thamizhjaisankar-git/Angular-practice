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

      this.data.countries.forEach((country:any) => {
        country.states.forEach((state:any) => {
          state.schools.forEach((school:any) => {
            this.schools.push(school);
            // console.log(this.schools)
          })
        })
      })
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
