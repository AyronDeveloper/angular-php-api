import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComidas } from '../models/comida.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string="http://localhost/proyectos/PHP/apiPHP-MVC/api/"

  constructor(private _httpClient: HttpClient) { }

  public getAllComidas(): Observable<IComidas[]>{
    return this._httpClient.get<IComidas[]>(`${this.baseUrl}comidas`)
  }

  public getComida(id:number): Observable<IComidas>{
    return this._httpClient.get<IComidas>(`${this.baseUrl}comidas/${id}`)
  }

  public createComida(form: IComidas|FormData):Observable<IComidas>{
    return this._httpClient.post<IComidas>(`${this.baseUrl}crearComida`, form)
  }

  public updateComida(id: number, form:IComidas|FormData):Observable<IComidas>{
    return this._httpClient.post<IComidas>(`${this.baseUrl}actualizarComida/${id}`,form)
  }

  public deleteComida(id:number):Observable<IComidas>{
    return this._httpClient.delete<IComidas>(`${this.baseUrl}eliminarComida/${id}`)
  }
}
