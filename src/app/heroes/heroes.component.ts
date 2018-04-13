import { Component, OnInit } from '@angular/core';
import {Hero} from '../model/hero';
import {HEROES} from '../mocks/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroList = HEROES;
  selectedHero : Hero;

  constructor() { }

  ngOnInit() {
  }

  selectHero(hero:Hero):void{
    this.selectedHero = hero;
  }

}
