import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements OnInit {


  @Input() title;
  @Input() caption;
  @Input() imageClass;

  constructor() { }

  ngOnInit() {
  }

}
