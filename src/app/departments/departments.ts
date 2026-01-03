import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import studentList from "../student-list/student-list"

@Component({
  selector: 'app-departments',
  imports: [studentList],
  templateUrl: './departments.html',
  styleUrl: './departments.css',
})
export default class Departments {
  data = history.state;
  selecteddept = this.data.selecteddept;

  private router = inject(Router);
  viewStudents(){
    console.log(this.selecteddept);
    this.router.navigate(['/student'], {
      state: {
        data:this.selecteddept,
      }
    });
  }

}
