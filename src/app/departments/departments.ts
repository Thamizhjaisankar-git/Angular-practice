import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [],
  templateUrl: './departments.html',
  styleUrl: './departments.css',
})
export default class Departments {
  route = inject(ActivatedRoute);

  @Input() schoolName!:any;
  @Input() selecteddept:any[] = [];
  
  private router = inject(Router);
  viewStudents(dept:any){
    console.log(this.selecteddept);
    this.router.navigate(['/school',this.schoolName,dept,'students'], {
      state: {
        department: this.selecteddept,
      }
    });
    return dept;
  }

  
}
