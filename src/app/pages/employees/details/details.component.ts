import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
//propiedad navigationExtras lo utilizo para pasar objeto de persona a editar
navigationExtras: NavigationExtras= {
  state:{
    value:null
  }
};
  employee: any = null;

constructor(private router: Router) { 
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state;
}

  ngOnInit(): void {
  }

  onGoToEdit():void{
    this.navigationExtras.state = this.employee;
    this.router.navigate(['edit'], this.navigationExtras);
   }
   onGoBackToList():void{
    this.router.navigate(['list'], this.navigationExtras);
   }
   onGoToDelete():void{ 
    alert('Deleted');
  }
}
