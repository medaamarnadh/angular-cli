import { Component, OnInit } from '@angular/core';
import {Article} from '../Article';
import {NewsHttpService} from '../news-http.service';

@Component({
  selector: 'app-head-lines',
  templateUrl: './head-lines.component.html',
  styleUrls: ['./head-lines.component.css']
})
export class HeadLinesComponent implements OnInit {

  articles: Article[];

  constructor(private newsAPI: NewsHttpService) { }

  ngOnInit() {
    this.getHeadLines();
  }

  getHeadLines() {


    this.newsAPI.getHeadLines()
      .subscribe(articles =>  {
        this.articles = articles;

      });
  }





}
