/**
 * New typescript file
 */
import { Component } from '@angular/core';
import { HeroesComponent } from './component/app.heroes.component';

@Component({
  selector: 'app-hero',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Tour Heroes!';
}
