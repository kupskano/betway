import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../service/general.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  articles;
  constructor(
    private generalService: GeneralService
  ) {}

  ionViewDidEnter() {
    setTimeout(() => {
      this.generalService.getNews().subscribe((data) => {
        this.articles = data['articles'];
      })
    },2000)
    
  }


 
 
  ngOnInit() {}

}
