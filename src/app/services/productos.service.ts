import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { ProductoInt } from '../interfaces/producto-int.inbterface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];


  constructor( private http: HttpClient ) {

    this.cargarProductos();

  }


  private cargarProductos() {

    this.http.get<Producto[]>('https://angular-html-5d13d-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
        .subscribe( (resp: Producto[]) => {
          this.productos = resp;
          this.cargando = false;
        });

  }

  getProducto( id: string ) {

    return this.http.get<ProductoInt>(`https://angular-html-5d13d-default-rtdb.europe-west1.firebasedatabase.app/productos/${ id }.json`)

  }

}