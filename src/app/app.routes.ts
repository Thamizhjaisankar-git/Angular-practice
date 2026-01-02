import { Routes } from '@angular/router';
import counter from "./counter/counter"
import { FormValidation } from './form-validation/form-validation';
import { Login}  from "./login/login";
import { Practice } from "./practice/practice"

export const routes: Routes = [
    {
        path:'',
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
];

