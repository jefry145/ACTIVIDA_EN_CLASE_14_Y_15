import { Component } from '@angular/core';
import { DataService } from './servicios/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad14y15';
  textPadre!:string
  EnviarDatosAhijo(){
    this.dataServices.textHijo = this.textPadre
  }
  constructor(public dataServices:DataService){}
}
