import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Employee } from 'src/app/shared/models/employees.interface';
import { EmployeesService } from '../employees.service';

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
constructor(private router: Router, private employeesSvc: EmployeesService) { 
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state;
    
    
}

  ngOnInit(): void {
    if (typeof this.employee === 'undefined'){
      this.router.navigate(['list']);
      console.log(typeof(this.employee)) 
    }
  }

  onGoToEdit():void{
    this.navigationExtras.state = this.employee;
    this.router.navigate(['edit'], this.navigationExtras);
   }
   onGoBackToList():void{
    this.router.navigate(['list'], this.navigationExtras);
   }
   /**
    onGoToDelete():void{ 
    alert('Deleted');
  }
  */
  async onGoToDelete(empId: any): Promise<void> {
    try {
      await this.employeesSvc.onDeleteEmployees(empId);
      alert('Deleted');
    } catch (err) {
      console.log(err);
    }
}
}
