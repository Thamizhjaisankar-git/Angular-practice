import { Component, inject } from '@angular/core';
import { FormsModule, FormArray, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-validation',
  imports: [ FormsModule, ReactiveFormsModule, RouterLink ],
  templateUrl: './form-validation.html',
  styleUrl: './form-validation.css',
})
export class FormValidation { 
  // name="Chen"

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  submit(form:any){
    console.log(form.value);
    this.router.navigate(['/login'])
  }
  
  userForm:any = new FormGroup({
    name: new FormControl ('',[Validators.required, Validators.minLength(4)]),
    email: new FormControl ('',[Validators.required, Validators.email]),
    city: new FormControl ('',Validators.required)
  })

  name:string="";
  submitted=false;
  submitFormData(){
    if(this.userForm.valid){
      this.submitted = true;
      console.log(this.userForm.value);
      this.name=this.userForm.value.name;
       this.router.navigate(['/login',this.name],{
       state: {
        fullname: this.name,
       }
    })
    }
  } 

 
}
