import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import {ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent {

  producto:any = undefined;
  cod:string = undefined;

  constructor(private route:ActivatedRoute,
              private _ps:ProductosService){

    route.params.subscribe( params=>{
        _ps.cargar_producto(params['id'])
            .subscribe( data => {
            this.cod = params['id'];
            this.producto = data.json();
        });

    })
  }

}
