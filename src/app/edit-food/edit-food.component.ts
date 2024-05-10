import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { IComidas } from '../models/comida.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {

  id?:number
  comida?: IComidas

  formularioEdit:FormGroup

  image?:string

  loaderUpdate: boolean=true
  dataImagen: File|string=""
  imgPrev: File|null=null

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService,
    private formBuilder:FormBuilder
  ){
    this.formularioEdit=this.formBuilder.group({
      nombre:""
    })
  }


  ngOnInit(): void {
  //console.log(this.imgPrev)
    this._route.params.subscribe(params=>{
      //console.log(params["id"])
      this._apiService.getComida(Number(params["id"])).subscribe((data:IComidas)=>{
        this.id=params["id"]
        console.log(data)
        this.comida=data
        this.image=this.comida.imagen

        this.formularioEdit.patchValue({
          nombre:this.comida.nombre
        })

      })

    })

  }

  handleFile(e: any):void{
    console.log("click")
    this.dataImagen=e.target.files[0]

     const render=new FileReader()
     render.onload=(e:any)=>{
      this.imgPrev=e.target.result
     }
     render.readAsDataURL(e.target.files[0])
  }

  handleSubmit(e: any):void{
    e.preventDefault()
    //console.log("click detectado")
    const form:FormData=new FormData();

    form.append("nombre",this.formularioEdit.get("nombre")?.value)
    form.append("imagen",this.dataImagen)
    //console.log(this.formularioEdit.get("nombre")?.value)

    this._apiService.updateComida(Number(this.id),form).subscribe((response: IComidas)=>{
      
    })
  }


}
