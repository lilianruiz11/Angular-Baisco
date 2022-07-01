import { Component } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <h1>la base es: {{base}}</h1>
        <button (click)="acumular(base)">+  {{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base)">-  {{base}}</button>
        <span>{{undefined}}</span>
        `
       
        
})

export class contadorComponent
{
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
  
    acumular(valor: number)
      {
         this.numero +=valor;
      }
    

}