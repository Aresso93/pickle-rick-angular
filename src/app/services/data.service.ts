import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Character } from '../model/character';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCharacters(){
    return this.http.get<Character>('https://rickandmortyapi.com/api/character').pipe(
      tap(characterObj => console.log('PICKLE', characterObj)),
      map((characterObj:any)=> characterObj.results),
      tap(characterResult => console.log('RICK', characterResult))
      )
  }

}
