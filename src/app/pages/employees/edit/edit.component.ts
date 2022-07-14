import { Component} from '@angular/core';

//por ahora anulo "selector" porque el componente se llama a traves de la ruta
//for now I override "selector" because the component is called through the route
@Component({
  //selector: 'app-edit',
  template: '<app-employee-form></app-employee-form>',
  //anulo styleUrls: porque se alimina, importamos el formulario desde employee-form
  //styleUrls: ['./edit.component.css']
})
export class EditComponent {
 
}
 