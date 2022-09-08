import { Component, OnInit } from '@angular/core';
import { AuthService} from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router  ,public authService: AuthService) { }

  ngOnInit(): void {
  }
  ruta() {

    this.router.navigate(['login']);

  }
  rutaemergente() {

    this.router.navigate(['portfolio']);

  }
  logueado() {
    this.authService.isLoggedIn;
    console.log("Estado de logueado: " + this.authService.isLoggedIn);
  }
  Salir() {
    this.authService.SignOut();
    console.log("Estado de logueado: " + this.authService.isLoggedIn);
  }
}
