import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  image = 'assets/bg-image-28.jpg';
  image2 = 'assets/bg-image-29.jpg';

  ngOnInit() {
  }

}
