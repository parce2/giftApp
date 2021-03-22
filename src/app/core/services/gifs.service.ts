
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { SearchGiftsResponse, Datum } from '../interfaces/gifts.interface';
import { LocalStorageService } from './local-storage.service';
import { params } from '../constants/get.contants';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  public results: Datum[] = [];
  
  get historial(): string[] {
    return [...this._historial];
  }

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService) {    
        this._historial= this.localStorage.getItem('Data')||[];
        this.results= this.localStorage.getItem('images') || [];
    }

  searchGift(termino: string): void {

    termino = termino.trim().toLocaleLowerCase();

    if (!this._historial.includes(termino)) { // ver si ya existe el dato
      this._historial.unshift(termino);
      this._historial = this._historial.slice(0, 10);
      this.localStorage.create("Data",this._historial);
    }
    const paramss = new HttpParams()
    .set('api_key',environment.API)
    .set('limite', '10').set('q', `${termino}`);
    this.http.get<SearchGiftsResponse>(`${environment.NAME_API}/search`, {params:paramss})
      .subscribe(data =>{
         this.results = data.data;
         this.localStorage.create("images",data.data);
      } );
  }

}
