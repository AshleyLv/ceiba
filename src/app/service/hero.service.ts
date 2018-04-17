import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../model/hero';
import { HEROES } from '../mocks/mock-heroes';
import { MessageService } from './message.service'; 

@Injectable()
export class HeroService {

  
  constructor(private messageService : MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.addMessage('HeroService: fetched heroes');
    return Observable.of(HEROES);
  }

  getHero(id:number): Observable<Hero>{
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`);
    return Observable.of(HEROES.find(hero=>hero.id === id));
  }
  

}
