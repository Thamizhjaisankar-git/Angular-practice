import { Component, inject } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departments',
  imports: [],
  templateUrl: './departments.html',
  styleUrl: './departments.css',
})
export default class Departments {
  data = history.state;
  selecteddept = this.data.selecteddept;

  route = inject(ActivatedRoute);
  schoolName!:any;
  ngOnInit() {
    this.schoolName = this.route.snapshot.paramMap.get('schoolName');
    console.log(this.schoolName);
  }

  private router = inject(Router);
  viewStudents(dept:any){
    console.log(this.selecteddept);
    this.router.navigate(['/school',this.schoolName,dept,'students'], {
      state: {
        department: this.selecteddept,
      }
    });
  }

}
