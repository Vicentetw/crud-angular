import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
value;
employeeForm!: FormGroup;
// para email corto private isEmail = /\S+@\S+\.\S+/;
private isEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
    
   }

  ngOnInit(): void {
    this.initForm();
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
