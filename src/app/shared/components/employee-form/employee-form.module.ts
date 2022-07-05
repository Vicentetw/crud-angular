import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './employee-form.component';



@NgModule({
  declarations: [EmployeeFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[EmployeeFormComponent]
  //debo retirarlo de app.module.ts para exportarlo desde acá, también lo declaro y lo quito de app.module.ts
  })
export class EmployeeFormModule { }
