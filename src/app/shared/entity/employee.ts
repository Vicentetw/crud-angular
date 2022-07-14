export class Employee {
    id?:string;
    name:string;
    lastName:string;
    email:string;
    startDate:string;

    constructor (id:string, name:string, lastName:string,email:string,startDate:string)
    { 
        this.id=id;
        this.name=name;
        this.lastName=lastName;
        this.email=email;
        this.startDate=startDate;
            
       
    }
};