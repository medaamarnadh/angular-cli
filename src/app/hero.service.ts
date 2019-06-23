import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROS} from './Heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private heroesUrl = 'api/heroes';

  /*getHeros(): Observable<Hero[]> {
    console.log('Came to Hereo services:::::');
    this.messageService.add('HeroService: fetched service');
    return of(HEROS);
  } */

  getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }
}
