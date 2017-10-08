import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando:boolean = true;

  constructor(private http:Http) {
    this.cargar_productos();
  }

  public cargar_productos(){

    this.cargando = true;

    if(this.productos.length === 0){
        this.http.get('https://angularweb-7af21.firebaseio.com/productos_idx.json')
                  .subscribe( data => {
                    this.cargando = false;
                    this.productos = data.json();
                  })
    }
  }

}
