import { Component, inject } from '@angular/core';
import serviceData from '../service'
import { Router  } from '@angular/router';
import department from "../departments/departments"
import students from "../student-list/student-list"

@Component({
  selector: 'app-student-data',
  standalone: true,
  imports:[department,students],
  templateUrl: './student-data.html',
  styleUrls: ['./student-data.css'],
})
export default class StudentData {
  dataStore = inject(serviceData);
  data:any =[];
  schools:any = [];
  departments:any = [];
  department:any=[];
  selectedstudents:any = [];
  showDepartments=false;
  showschoolList=true;
  schoolName:any;

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
  viewDepartment(schoolName:any,dept:any){
    this.showschoolList = false;
    this.showDepartments = true;
    // console.log(dept);
    this.department = dept;
    this.schoolName = schoolName;
    // console.log(this.department);
  }

  
  
}
