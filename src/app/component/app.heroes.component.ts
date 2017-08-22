import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './app.heroes.component.html',
  styleUrls: ['./app.heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = [];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };

  getHeroes(): void {
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
}

