import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export default class StudentList {
  departmentData = history.state;
  department = this.departmentData.department;
  students:any[] = [];
 
  ngOnInit(){
    for(const dept of this.department){
        this.students.push(...dept.students);
      }
    console.log(this.department); 
  }
  
}
