import { Component, OnInit, Input } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { Location } from '@angular/common';

import {Hero} from '../model/hero';
import { HeroService } from '../service/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero : Hero;
  constructor(private heroService : HeroService, private location : Location, private route : ActivatedRoute) { }

  ngOnInit() {
  }

  getHeros(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }
 

}
