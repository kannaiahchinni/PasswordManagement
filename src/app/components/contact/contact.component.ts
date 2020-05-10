import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  public caption = 'Want to get in touch?  We\'d love to hear from you. Here is how you can reach us';
  constructor() { }

  ngOnInit() {

  }

}
