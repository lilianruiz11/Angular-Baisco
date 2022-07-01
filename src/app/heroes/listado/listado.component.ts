import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent  {
  heroes: string[] =['Spiderma','Ironman','Hulk','Thor'];
  heroeBorrado:string ='';  
  BorrarElemento():void
  {
   
    this.heroeBorrado=this.heroes.shift()|| '';
  }


  
}
