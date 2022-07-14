import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Employee } from '../../models/employees.interface';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

 employee: any =null;
 //employee!: Employee;
  //propiedad navigationExtras lo utilizo para pasar objeto de persona a editar
navigationExtras: NavigationExtras= {
  state:{
    value:null
  }
};
// para email corto private isEmail = /\S+@\S+\.\S+/;
private isEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
employeeForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state;

   
    this.initForm();
    
   }

  ngOnInit(): void {
       if (typeof this.employee === 'undefined'){
      //redirect
      this.router.navigate(['new']);
    }else{
      this.employeeForm.patchValue(this.employee)
    }
  }
onSave(): void{
  console.log('saved', this.employeeForm.value)
}
private initForm(): void {
  this.employeeForm = this.fb.group({
  name:['', [Validators.required]],
  lastName:['', [Validators.required]],
  email:['', [Validators.required, Validators.pattern(this.isEmail)]],
  startDate:['', [Validators.required]]
})
}

}
