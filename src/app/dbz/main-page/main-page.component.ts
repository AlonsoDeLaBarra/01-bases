import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  // Valor por defecto que se pasa al componente agregar (formulario)
  nuevo: Personaje = {
    nombre : '',
    poder: 0
  }

}
