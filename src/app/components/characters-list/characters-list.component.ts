import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  characters: Character[] = []

  constructor(public data: DataService){}
  
  ngOnInit(): void {
    this.data.getCharacters().subscribe(characterData => {
      this.characters = characterData
    })
  }

}
