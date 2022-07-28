import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
//propiedad navigationExtras lo utilizo para pasar objeto de persona a editar
employees$ = this.employeesSvc.employees;
navigationExtras: NavigationExtras= {
  state:{
    value:null
  }
};
/** datos que ya no utilizo
fakeData = [
  {
    name:'Emma',
    lastName:'williams',
    email:'williamsemma@gmail.com',
    startDate:'01/06/2022'
  },
  {
    name:'Emma2',
    lastName:'williams2',
    email:'williamsemma2@gmail.com',
    startDate:'01/06/2022'
  },
  {
    name:'Emma3',
    lastName:'williams3',
    email:'williamsemma3@gmail.com',
    startDate:'01/06/2022'
  },
  {
    name:'Emma4',
    lastName:'williams4',
    email:'williamsemma4@gmail.com',
    startDate:'01/06/2022'
  }
]
*/
  constructor(private router: Router, private employeesSvc: EmployeesService) { }

  ngOnInit(): void {
  }

  onGoToEdit(item: any):void{
    this.navigationExtras.state = item;
    this.router.navigate(['edit'], this.navigationExtras);
 }


onGoToSee(item: any):void{
  this.navigationExtras.state = item;
  this.router.navigate(['details'], this.navigationExtras);
 }

onGoToDelete(item: any):void{ 
  alert('Deleted');
}
}
