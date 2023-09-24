import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Character } from '../model/character';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  selectedCharacter = ''

  apiPage = 1

  BASE_URL = 'https://rickandmortyapi.com/api/character?page='

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.BASE_URL + this.apiPage).pipe(
      map((response: any) => response.results)
    );
  }
  nextPage(){
    this.apiPage +=1
    console.log(this.apiPage);
    this.getCharacters().subscribe();
    
  }

  prevPage(){
    this.apiPage -=1
    if (this.apiPage <=0) {
      this.apiPage =1;
    }
    console.log(this.apiPage);
    this.getCharacters().subscribe();
  }



  getCharactersDetails(){

  }

}
