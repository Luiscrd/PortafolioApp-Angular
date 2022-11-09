import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Info } from '../interfaces/data-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info!: Info;

  cargada: boolean = false;

  constructor(

    private http: HttpClient

  ) {

    this.http.get<Info>('assets/data/data-pagina.json')
    .subscribe( resp => {

      this.cargada = true;
      this.info = resp;

      console.log(resp);


    });

  }

}
