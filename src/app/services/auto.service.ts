import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Automovil } from '../models';
import {MessagesService} from '../services/messages.service'
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  private autosURL = "https://catalogo-autos.herokuapp.com/api/autos";
  constructor(private http: HttpClient, private messageService: MessagesService) { }

  getAutos() : Observable<any>{
    return this.http.get<any>(this.autosURL).pipe(
    catchError(this.handleError<any>('getAutos')),
    tap(()=> this.messageService.add('Autos Obtenidos'))
    )
  }
  
  updateAutos(auto: Automovil) :Observable<any>{
    return this.http.put<any>(`${this.autosURL}/${auto._id}`, auto).pipe(
      catchError(this.handleError<any>('updateAutos')),
      tap(()=> this.messageService.add('Auto Actualizado'))
      )
  }

  addAutos(auto: Automovil) :Observable<any>{
    return this.http.post<any>(`${this.autosURL}`, auto).pipe(
      catchError(this.handleError<any>('getAutos')),
      tap(()=> this.messageService.add('Auto Agregado'))
      )
  }

  deleteAutos(auto: Automovil) :Observable<any>{
    return this.http.delete<any>(`${this.autosURL}/${auto._id}`).pipe(
      catchError(this.handleError<any>('deleteAutos')),
      tap(()=> this.messageService.add('Auto Eliminado'))
      )
    
  }

  private handleError<T>(operacion = 'operacion', result?: T){
    return(error: any): Observable<T> => {
      this.messageService.add(`${operacion} falló: ${error.message}`)
      return of(result as T);
    }
  }



}
