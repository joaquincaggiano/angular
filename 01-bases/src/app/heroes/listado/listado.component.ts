import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ["SpiderMan", "IronMan", "Hulk", "Thor"];
  heroeBorrado: string = "";
  
  deleteHeroe(){
    this.heroeBorrado= this.heroes.pop() || "";
  }

}
