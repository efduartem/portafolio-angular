import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  productos_search:any[] = [];
  cargando:boolean = true;

  constructor(private http:Http) {
    this.cargar_productos();
  }

  public cargar_producto(cod:string){
      return this.http.get(`https://angularweb-7af21.firebaseio.com/productos/${ cod }.json`);
  }

  public cargar_productos(){

    this.cargando = true;

    let promesa = new Promise((resolve, reject)=>{
      if(this.productos.length === 0){
          this.http.get('https://angularweb-7af21.firebaseio.com/productos_idx.json')
                    .subscribe( data => {
                      this.cargando = false;
                      this.productos = data.json();
                      resolve();
                    })
      }
    });

    return promesa;
  }

  public buscar_producto(param:string){
    if(this.productos.length === 0){
      this.cargar_productos().then(()=>{
        this.filtrar_productos(param);
      })
    }else{
      this.filtrar_productos(param);
    }
  }

  private filtrar_productos(param:string){
    this.productos_search = [];
    param.toLowerCase();
    this.productos.forEach( prod => {
        if(prod.categoria.indexOf(param)>=0
            || prod.titulo.toLowerCase().indexOf(param)>=0){
          this.productos_search.push(prod);
        }
    })
  }

}
