import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

export interface Arp {
  urlToImage: string;
  title: Title;

}


@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  getNews(){
    // return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
    return this.httpClient.get('https://saurav.tech/NewsAPI/top-headlines/category/general/in.json')
  }

  constructor(
    private httpClient: HttpClient
  ) { }
}
