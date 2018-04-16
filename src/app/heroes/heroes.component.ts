import { Component, OnInit } from '@angular/core';
import {Hero} from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroList : Hero[];
  selectedHero : Hero;

  constructor(private heroService : HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

  selectHero(hero:Hero):void{
    this.selectedHero = hero;
  }

  getHeros() : void{
    this.heroService.getHeros().subscribe(heroes=> this.heroList = heroes);
  }

}
