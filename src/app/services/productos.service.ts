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
  productosFiltrado: Producto[] = [];


  constructor(private http: HttpClient) {

    this.cargarProductos();

  }


  private cargarProductos() {

    return new Promise<void>((resolve, reject) => {

      this.http.get<Producto[]>('https://angular-html-5d13d-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
        .subscribe((resp: Producto[]) => {

          this.productos = resp;

          this.cargando = false;

          resolve();

        });

    })


  }

  getProducto(id: string) {

    return this.http.get<ProductoInt>(`https://angular-html-5d13d-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`)

  }

  buscarProducto(term: string) {

    if (this.productos.length === 0) {

      this.cargarProductos().then(() => {

        this.filtrarProductos(term);

      })

    } else {

      this.filtrarProductos(term);

    }

  }

  private filtrarProductos(term: string) {

    this.productosFiltrado = [];

    term = term.toLowerCase();

    this.productos.forEach(prod => {

      const tituloLower = prod.titulo.toLowerCase();

      const categoriaLower = prod.categoria.toLowerCase();

      if (categoriaLower.indexOf( term ) >= 0 || tituloLower.indexOf( term ) >= 0) {

        this.productosFiltrado.push( prod );

      }

    })

  }

}
