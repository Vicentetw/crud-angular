import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  template: '<app-employee-form></app-employee-form>',
  //anulo styleUrls: porque se alimina, importamos el formulario desde employee-form
  //styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit{

 ngOnInit(): void {
     
 }
  

}
