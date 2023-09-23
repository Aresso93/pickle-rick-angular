import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Character } from '../model/character';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  selectedCharacter = ''

  BASE_URL = 'https://rickandmortyapi.com/api/character'

  getCharacters(){
    return this.http.get<Character>(this.BASE_URL).pipe(
      tap(characterObj => console.log('PICKLE', characterObj)),
      map((characterObj:any)=> characterObj.results),
      tap(characterResult => console.log('RICK', characterResult))
      )
  }

  getCharactersDetails(){

  }

}
