import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Automovil } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  private autosURL = "https://catalogo-autos.herokuapp.com/api/autos";
  constructor(private http: HttpClient) { }

  getAutos() : Observable<any>{
    return this.http.get<any>(this.autosURL)
  }
  
  updateAutos(auto: Automovil) :Observable<any>{
    return this.http.put<any>(`${this.autosURL}/${auto._id}`, auto)
  }

  addAutos(auto: Automovil) :Observable<any>{
    return this.http.post<any>(`${this.autosURL}`, auto)
  }
  deleteAutos(auto: Automovil) :Observable<any>{
    return this.http.delete<any>(`${this.autosURL}/${auto._id}`)
  }
}
