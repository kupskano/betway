import { Component, OnInit } from '@angular/core';
import { EntertainmentService } from '../service/entertainment.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.page.html',
  styleUrls: ['./entertainment.page.scss'],
})
export class EntertainmentPage implements OnInit {
  articles;
  constructor(
    private entertainmentService: EntertainmentService
  ) { }

  ionViewDidEnter() {
    setTimeout(() => {
      this.entertainmentService.getNews().subscribe((data) => {
        this.articles = data['articles'];
      })
    },2000)
    
  }

  ngOnInit() {
  }

}
