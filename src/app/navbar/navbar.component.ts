import { Component, OnInit } from '@angular/core';

// import * as 'jquery';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {

      $('.navBox .img_logo img').last().css('display', 'none');
  
    var begin = 250;

    var about = $('#about').offset().top;

    var list = $('.navBox .nav_list li a');

    $(window).scroll(function(){
      var navOff = $(window).scrollTop();
      // console.log(navOff);
      if(navOff > begin ){
        $('.navBox').css('backgroundColor', '#fff');
        $('.navBox .nav_list a').css('color', '#000');
        $('.navBox .social_nav a').css('color', '#000');
        $('.navBox').css('height', '60');
        $('.navBox .img_logo img').first().css('display', 'none');
        $('.navBox .img_logo img').last().css('display', 'block');
      } 

      else{
        $('.navBox').css('backgroundColor', 'transparent');
        $('.navBox .nav_list a').css('color', '#fff');
        $('.navBox .social_nav a').css('color', '#fff');
        $('.navBox').css('height', '80');
        $('.navBox .img_logo img').first().css('display', 'block');
        $('.navBox .img_logo img').last().css('display', 'none');
      }


    })

  }
  
  
}
