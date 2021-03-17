import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Responsegiphy, gif } from '../interface/interface.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
 private api:string='http://api.giphy.com/v1/gifs';
 private apikey:string ='lNFkRNhFvWz2dgIfzLxOeCjjayFlnA9z';
 public limit:number = 10;
 private _historial:string[]=[];
 public resultados:gif[] = [];
 get historial(){
   return [...this._historial]
 }


 constructor(private http:HttpClient){
   if(localStorage.getItem('historial')){
    this._historial = JSON.parse(localStorage.getItem('historial'))
    this.resultados = JSON.parse(localStorage.getItem('resultados'))
   }
 }

 buscargifs(query:string){

  if (!this._historial.includes(query)){
      this._historial.unshift(query)
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial))
  }
  const params = new HttpParams()
  .set ('api_key',`${this.apikey}`)
  .set ('limit', `${this.limit}`)
  .set ('q', `${query}`)

  this.http.get<Responsegiphy>(`${this.api}/search?`,{params})
  .subscribe((resp) =>{
    this.resultados = resp.data;
    localStorage.setItem('resultados',JSON.stringify(this.resultados))
  });
 }

}
