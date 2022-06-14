import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  title: string = 'Dragon Ball Z';

  personajes: Personaje[] = [
    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
  ];

  nuevo: Personaje = {
    name: '',
    power: 0,
  };

  agregar() {
    if (this.nuevo.name.trim().length === 0) {
      return;
    }

    this.personajes.push(this.nuevo);

    this.nuevo = {
      name: '',
      power: 0,
    };
  }
}
