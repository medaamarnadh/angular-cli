import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROS} from '../Heros';
import {HeroService} from '../hero.service';
import { MessageService } from '../messages.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  // hero = 'Amar'


  heros: Hero[];

  selectedHero: Hero;

  selectHero(hero) {
    this.messageService.add('Selected::::::'+hero.name);
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService, private messageService: MessageService) {

  }

  getHeros(): void {

    this.heroService.getHeros()
      .subscribe(heros => this.heros = heros);
  }

  ngOnInit() {
    this.getHeros();

  }

}
