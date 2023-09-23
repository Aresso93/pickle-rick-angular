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

  apiPage = 1

  BASE_URL = 'https://rickandmortyapi.com/api/character?page='

  nextPage(){
    this.apiPage +=1
    console.log(this.apiPage);
    
    
  }

  prevPage(){
    this.apiPage -=1
    if (this.apiPage <=0) {
      this.apiPage =1;
    }
    console.log(this.apiPage);
    
  }

  getCharacters(){
    return this.http.get<Character>(this.BASE_URL + this.apiPage).pipe(
      tap(characterObj => console.log('PICKLE', characterObj)),
      map((characterObj:any)=> characterObj.results),
      tap(characterResult => console.log('RICK', characterResult))
      )
  }

  getCharactersDetails(){

  }

}
