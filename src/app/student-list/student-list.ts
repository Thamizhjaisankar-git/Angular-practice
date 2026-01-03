import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export default class StudentList {

  data = history.state;
  

  //  @Input() data:any=[];
  ngOnInit(){
    console.log(this.data)
  }
  
}
