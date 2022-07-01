import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
//propiedad navigationExtras lo utilizo para pasar objeto de persona a editar
  navigationExtras: NavigationExtras= {
  state:{
    value:null
  }
};

fakeData = [
  {
    name:'Vicente',
    lastName:'Perrotta',
    email:'perrottavicente@gmail.com',
    startDate:'01/06/2022'
  },
  {
    name:'Vicente2',
    lastName:'Perrotta2',
    email:'perrottavicente2@gmail.com',
    startDate:'01/06/2022'
  },
  {
    name:'Vicente3',
    lastName:'Perrotta3',
    email:'perrottavicente3@gmail.com',
    startDate:'01/06/2022'
  },
  {
    name:'Vicente4',
    lastName:'Perrotta4',
    email:'perrottavicente4@gmail.com',
    startDate:'01/06/2022'
  }
]

  constructor(private router: Router) { }

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
