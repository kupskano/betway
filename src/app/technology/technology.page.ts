import { Component, OnInit } from '@angular/core';
import { TechnologyService } from '../service/technology.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.page.html',
  styleUrls: ['./technology.page.scss'],
})
export class TechnologyPage implements OnInit {
  articles;
  constructor(
    private technologyService: TechnologyService
  ) { }

  
  ionViewDidEnter() {
    setTimeout(() => {
      this.technologyService.getNews().subscribe((data) => {
        this.articles = data['articles'];
      })
    },2000)
    
  }




  ngOnInit() {
  }

}
