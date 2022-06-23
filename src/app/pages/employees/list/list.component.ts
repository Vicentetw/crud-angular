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
