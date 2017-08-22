/**
 * New typescript file
 */
import { Component, OnInit } from '@angular/core';


import { HeroService } from '../service/hero.service';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './app.dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];



  constructor(private heroService: HeroService) { };
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
