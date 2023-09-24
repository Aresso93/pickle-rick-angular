import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/model/character';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  characters: Character[] = []

  constructor(public data: DataService, private route: ActivatedRoute, private router: Router){}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      const page = +params['page'];
      if(!isNaN(page)){
        this.data.apiPage = page;
       
      } else {
        this.data.apiPage = 1;
      }
      this.loadData();
    })
   
  }

  private loadData() {
    this.data.getCharacters().subscribe(characterData => {
      this.characters = characterData;
      console.log('Dati caricati:', this.characters);
    });
  }

  nextPage() {
    this.data.nextPage();
    this.updateRoute();
    this.loadData();
  }
  
  prevPage() {
    this.data.prevPage();
    this.updateRoute();
    this.loadData();
  }

  private updateRoute(){
    this.router.navigate([], { relativeTo: this.route, queryParams: { page: this.data.apiPage } });
  }

}
