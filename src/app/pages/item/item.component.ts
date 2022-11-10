import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoInt } from 'src/app/interfaces/producto-int.inbterface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto?: ProductoInt;

  fecha = new Date().getUTCDate();

  productoId?: string;

  id?: string;

  constructor(

    private route: ActivatedRoute,

    private productosService: ProductosService

  ) { }

  ngOnInit() {

    this.route.params.subscribe( params => {

      this.productoId = params['id'];

      this.id = this.productoId?.slice(-1);

      this.productosService.getProducto(params['id'])
      .subscribe( (prod: ProductoInt) => {

        this.producto = prod;
        console.log(prod);

        this.producto.cliente = 'Apple (España)';

        this.producto.web = 'www.apple.com';

      })
    })

  }

}
