import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Article} from './Article';
import { Observable, of } from 'rxjs';
import { nextTick } from 'q';

@Injectable({
  providedIn: 'root'
})
export class NewsHttpService {

  constructor(private http: HttpClient) {}
  HttpOptions = {
    params: new HttpParams().set('apiKey', '0beb7cc40f594ddeb29e4d00290dc5f8').set('sources', 'google-news'),
    observe: 'response'
  }

  getHeadLines(): Observable<any> {
    return this.http.get('https://newsapi.org/v2/top-headlines', {
      params: {
        apiKey: '0beb7cc40f594ddeb29e4d00290dc5f8',
        sources: 'google-news'
      },
      observe: 'response'
    })
  }


}
