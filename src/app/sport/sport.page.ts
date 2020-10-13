import { Component, OnInit } from '@angular/core';
import { SportService } from '../service/sport.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.page.html',
  styleUrls: ['./sport.page.scss'],
})
export class SportPage implements OnInit {
  articles;
  constructor(
    private sportService: SportService
  ) { }

  ionViewDidEnter() {
    setTimeout(() => {
      this.sportService.getNews().subscribe((data) => {
        this.articles = data['articles'];
      })
    },2000)
    
  }

  ngOnInit() {
  }

}
