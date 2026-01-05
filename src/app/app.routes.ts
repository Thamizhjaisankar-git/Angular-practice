import { Routes } from '@angular/router';
import counter from "./counter/counter"
import { FormValidation } from './form-validation/form-validation';
import { Login}  from "./login/login";
import { Practice } from "./practice/practice"
import  serviceData  from "./data-store/data-store"
import School from "./student-data/student-data"
import Department from "./departments/departments"
import Student from "./student-list/student-list"

export const routes: Routes = [
    {
        path:'counter',
        component: counter
    },
    {
        path:'form',
        component: FormValidation
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'login/:name',
        component: Login
    },
    {
        path:'practice',
        component: Practice
    },
     {
        path:'',
        component: School
    },
    {
        path:'departments',
        component: Department
    },
    {
        path: 'school/:schoolName/departments',
        component: Department
    },
     {
        path:'students',
        component: Student
    },
    {
        path: 'school/:schoolName/:departmentName/students',
        component: Student
    }
];

