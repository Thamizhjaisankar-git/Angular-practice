import { Component, Input, inject } from '@angular/core';
import Actor from "../Actor"
import {JsonPipe} from '@angular/common';
import { ActivatedRoute } from "@angular/router"


@Component({
  selector: 'app-login',
  imports: [JsonPipe, ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  name="Thamizh"

  // @Input() fullname = "";

  data = history.state;
  fullname = this.data.fullname;

  skills = ['Developing','Testing','Designing'];
  actorData = new Actor(1,'Chen','chen123@gmail.com',this.skills[2])

  //  private route = inject(ActivatedRoute);
  //  show(){
  //   const paramData = this.route.snapshot.paramMap.get('name')
  //   console.log(paramData)
  //  }
  
}
