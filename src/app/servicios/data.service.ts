import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   //EJERCICIO SEMANA14
    textHijo:string=""
  //EJERCICIO SEMANA15
   textContentArea:string=""
   textHeader:string="Event Binding es el resultado de data binding mediante el cual trabaja con los eventos que se encuentran en el DOM"
   titulo:string="DATA BINDING INTERPOLATION"
  constructor() { }
}
