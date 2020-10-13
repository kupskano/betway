import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.page.html',
  styleUrls: ['./sample.page.scss'],
})
export class SamplePage implements OnInit {


  darkMode: boolean = false;

  constructor() { }

  cambio() {

    this.darkMode = !this.darkMode;
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      document.body.classList.toggle('dark');
      
  }

  ngOnInit() {
  }

}
