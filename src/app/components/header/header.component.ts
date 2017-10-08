import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InformacionService } from "../../services/informacion.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(public _is:InformacionService,
              private router:Router){

  }

  buscar_producto(param:string){
    console.log(param);
    this.router.navigate(['search', param])
  }

}
