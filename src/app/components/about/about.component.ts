import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  public links = [];

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks() {
    this.links = this.commonService.getCachedLinks();
    if (this.links.length < 1) {
      this.commonService.getLinks().subscribe(list => {
        this.links = list;
        this.commonService.setLinks(this.links);
      });
    }
  }

}
