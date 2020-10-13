import { Component, OnInit } from '@angular/core';
import { ScienceService } from '../service/science.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.page.html',
  styleUrls: ['./science.page.scss'],
})
export class SciencePage implements OnInit {
  articles;
  constructor(
    private scienceService: ScienceService
  ) { }

  ionViewDidEnter() {
    setTimeout(() => {
      this.scienceService.getNews().subscribe((data) => {
        this.articles = data['articles'];
      })
    },2000)
    
  }

  ngOnInit() {
  }

}
