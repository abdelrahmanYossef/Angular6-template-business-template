import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {


  bg_image = 'assets/dotted-map.png';

  constructor() { }

  ngOnInit() {
  }

}
