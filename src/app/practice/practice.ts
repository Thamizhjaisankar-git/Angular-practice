import { Component } from '@angular/core';
import { OnInit, OnChanges, signal, Input, DestroyRef, inject, afterNextRender, afterEveryRender, DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgFor, NgIf, NgClass, DatePipe, CurrencyPipe, UpperCasePipe, LowerCasePipe, JsonPipe, TitleCasePipe} from "@angular/common"
import user from "../Type"
import counter from "../counter/counter"
import { FormsModule } from '@angular/forms';
import { FormValidation } from '../form-validation/form-validation';
import appchild from "../child/child"
import { ReversePipe } from '../reverse-pipe';

@Component({
  selector: 'app-practice',
  imports: [RouterOutlet, counter, NgFor, NgIf, FormsModule, NgClass, FormValidation, appchild, DatePipe, CurrencyPipe, UpperCasePipe, LowerCasePipe, JsonPipe, TitleCasePipe, ReversePipe],
  templateUrl: './practice.html',
  styleUrl: './practice.css',
})
export class Practice implements OnInit{
   protected readonly title = signal('myapp');
    name = "Thamizh";
  
    setvalue(){
      this.name = "Chen"
    }
  
    count = 0;
    increment(){
      this.count++;
    }
  
    user:user = {
      name:"Chen",
      age: 22,
      city:""
    }
  
     ngOnInit():void{
      this.user.city ="China"; 
    }
  
    OnDestroy():void{
      alert("This is OnDestroy");
    }
  
    onMissing(){
      alert("message has error");
    }
  
    url = "periyar-cardamom-hills.jpg"
    url2 = "https://unsplash.com/s/photos/hills"
  
    teams=["Development","Testing","Devops","Sales"]
  
    isLoggedIn = false;
    isEditable = true;
    isCorrect = true;
  
  
     // displayText:string = '';
    // show(val:string){
    //   this.displayText=val;
    // }
  
    current = '';
    show(val:string){
      this.current = val ?? '';
    }
  
    message = "";
    showmessage(){
      this.message = "Secret message";
    }
  
    @Input() childData = '';
  
    parentmsg = "";
    getmessage(msg:string){
      this.parentmsg = msg;
    }
  
    amount = 1000;
    OnJoin = "12-12-2025";
    companyName = "BSIT";
    marks = {
      mark1: 100,
      mark2: 90
    }
  
    fullname="Chen Zhe Yuan"
  


    OnInit(){
      console.log("This is OnInit");
    }
  
    constructor(){
      const interval = setInterval(() => {
        this.count++;
      }, 1000);
  
      const destroyRef = inject(DestroyRef);
      destroyRef.onDestroy(() => {
        clearInterval(interval);
      })
      console.log("This is OnDestroy");
  
      
      afterNextRender(() => {
        console.log("This is after next render")
      });
  
      afterEveryRender(() => {
        console.log("This is after every render")
      });
  
    }


    
}
