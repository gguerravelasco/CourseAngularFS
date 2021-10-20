import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  //destinos: string[];
  destinos: DestinoViaje[];
  constructor() {
    //this.destinos = ['Quito', 'Guayaquil', 'Lima ', 'Bogotá', 'Buenos Aires', 'Santiago', 'Sao Paulo'];
    this.destinos = [];
  }

  ngOnInit(): void {
  }

  guardar(nombre: string, url: string): boolean {
    // console.log(nombre);
    //console.log(url);
    //console.log(new DestinoViaje(nombre, url));
    this.destinos.push(new DestinoViaje(nombre, url));
    //console.log(this.destinos);
    return false
  }

}
