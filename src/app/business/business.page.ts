import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../service/business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {
  articles;
  constructor(
    private businessService: BusinessService
  ) { }

  ionViewDidEnter() {
    setTimeout(() => {
      this.businessService.getNews().subscribe((data) => {
        this.articles = data['articles'];
      })
    },2000)
    
  }

  ngOnInit() {
  }

}
