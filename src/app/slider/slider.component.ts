import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  photo = 'assets/testimonial-1.jpg';

  photo2 = 'assets/testimonial-2.jpg';

  // slides = [
  //   {img: "http://placehold.it/350x150/000000"},
  //   {img: "http://placehold.it/350x150/111111"},
  //   {img: "http://placehold.it/350x150/333333"},
  //   {img: "http://placehold.it/350x150/666666"}
  // ];
  slideConfig = {
    "slidesToShow": 1,
    'dots': true,
    'method': {}
    };
  
  // addSlide() {
  //   this.slides.push({img: "http://placehold.it/350x150/777777"})
  // }
  
  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }

  ngOnInit() {
  }

}
