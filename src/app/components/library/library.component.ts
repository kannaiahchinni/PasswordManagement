import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.sass']
})
export class LibraryComponent implements OnInit {

  public links = [];

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks() {
    this.links = this.commonService.getCachedDocs();
    if (this.links.length < 1) {
      this.commonService.getDocs().subscribe(list => {
        this.links = list;
        this.commonService.setDocs(this.links);
      });
    }
  }

}
