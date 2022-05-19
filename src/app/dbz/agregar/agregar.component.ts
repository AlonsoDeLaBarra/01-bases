import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  // Input para recibir el valor por defecto a mostrar
  @Input() nuevo: Personaje = {
    nombre : '',
    poder : 0
  }

  // Manera de emitir el evento de agregar dentro del componente
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  // Método agrgar (puede emitir el evento o llamar al servicio)
  agregar() { 
    // Se valida la data a agregar
    if (this.nuevo.nombre.trim().length === 0) { return; }
    
    // Se emite el evento cuando se agrega, pasando el objeto emitido
    //this.onNuevoPersonaje.emit( this.nuevo );

    // Se llama al método del Servicio para agregar
    this.dbzService.agregarPersonaje( this.nuevo );

    // Se limpia el objeto
    this.nuevo = { nombre: '', poder: 0}
  } 

  // Inyección del servicio por medio de propiedad por defecto en el constructor
  constructor ( private dbzService: DbzService) {}

}
