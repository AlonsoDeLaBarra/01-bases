import { Component, Input, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //Input para recibir el listado a mostrar
  //@Input() personajes : Personaje[] = [];

  // Se espone una propiedad (getter) del listado de personajes
  get personajes() {
    return this.dbzService.personajes;
  }

  // Inyección del servicio por medio de propiedad por defecto en el constructor
  constructor( private dbzService: DbzService ) {}
}
