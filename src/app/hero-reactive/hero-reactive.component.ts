import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-hero-reactive',
  templateUrl: './hero-reactive.component.html',
  styleUrls: ['./hero-reactive.component.css']
})
export class HeroReactiveComponent implements OnInit {
  
  favoriteColorControl = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

}
