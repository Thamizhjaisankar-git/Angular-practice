import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export default class Child {
  @Output() childmessage = new EventEmitter<string>()
  addmsg() {
    this.childmessage.emit("Hello, this msg come from child"); 
  }
}
