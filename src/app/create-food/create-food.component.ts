import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IComidas } from '../models/comida.model';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css']
})
export class CreateFoodComponent {

  dataImage:File|string=""
  imgPrev: File|null=null

  formularioCreate:FormGroup

  constructor(
    private _apiServices:ApiService,
    private formBuilder:FormBuilder
  ){
    this.formularioCreate=this.formBuilder.group({
      nombre:""
    })
  }

  handlefile(e:any):void{
    this.dataImage=e.target.files[0]

    const render=new FileReader()
    render.onload=(e:any)=>{ 
      this.imgPrev=e.target.result
    }
    render.readAsDataURL(e.target.files[0])
  }

  handleSubmit(e:any):void{
    e.preventDefault()
    const form=new FormData()

    form.append("nombre",this.formularioCreate.get("nombre")?.value)
    form.append("imagen",this.dataImage)

    this._apiServices.createComida(form).subscribe((response: IComidas)=>{
      console.log(response)
    })



  }

}
