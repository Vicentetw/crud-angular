import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Employee } from 'src/app/shared/models/employees.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees!: Observable<Employee[]>;
filtroEmpleado: string= '';

 private employeesCollection: AngularFirestoreCollection<Employee>;
  
 constructor(private readonly afs:AngularFirestore) {
  this.employeesCollection = afs.collection<Employee>('employees');
  this.getEmployees();
   }
   
   //creamos 3 métodos
   onDeleteEmployees(empId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.employeesCollection.doc(empId).delete();
        resolve(result);
      } catch (err) {
        let errMessage = "Failed to do something exceptional";
        if (err instanceof Error) {
          errMessage = err.message;
        } 
               reject();
               console.log(errMessage)
      

      }
    });
  }
   onSaveEmployee(employee: Employee, empId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = empId || this.afs.createId();
        const data = { id, ...employee };
        const result = await this.employeesCollection.doc(id).set(data);
        resolve(result);
        alert('Modified');
      } catch (err) {
        reject();
      }
    });
  }
   private getEmployees(): void {
    this.employees = this.employeesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Employee))
    );
  }
}
