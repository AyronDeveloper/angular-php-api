import { Component, OnInit } from '@angular/core';
import { IComidas } from '../models/comida.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  comidasList: IComidas[]=[]
  loading: boolean=false

  constructor(private _apiService: ApiService){}

    ngOnInit(): void{
      this._apiService.getAllComidas().subscribe((data:IComidas[])=>{
        //console.log(data)
        this.comidasList=data
        this.loading=true
      })
    }

  
}
