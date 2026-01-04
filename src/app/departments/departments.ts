import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  imports: [],
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
        department: this.selecteddept,
      }
    });
  }

}
