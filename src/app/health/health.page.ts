import { Component, OnInit } from '@angular/core';
import { HealthService } from '../service/health.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {
  articles;
  constructor(
    private healthService: HealthService
  ) { }

  ionViewDidEnter() {
    setTimeout(() => {
      this.healthService.getNews().subscribe((data) => {
        this.articles = data['articles'];
      })
    },2000)
    
  }


  ngOnInit() {
  }

}
