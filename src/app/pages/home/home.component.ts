import { Component } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
//Two way binding
contentTextArea!:string

enviardatos(){
  this.dataServices.textContentArea = this.contentTextArea
}
//DATA SERVICES
  constructor(public dataServices:DataService){}

//EVENT BINDING
  Button:string="Vista mostrada"
  TexToHeader= this.dataServices.textHeader
  ocultarDIVhome(){
       if(this.dataServices.textHeader === this.TexToHeader){
              this.TexToHeader=" "
              this.Button= "Vista oculta"
       }else if(this.TexToHeader === " "){
        this.TexToHeader = this.dataServices.textHeader
        this.Button= "Vista mostrada"
       }
    }
}
