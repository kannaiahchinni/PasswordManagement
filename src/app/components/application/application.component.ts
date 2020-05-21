import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.sass']
})
export class ApplicationComponent implements OnInit {

  public links = [];

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getApplications();
  }

  getApplications() {
    this.links = this.commonService.getCachedApplications();
    if (this.links.length < 1) {
      this.commonService.getApplications().subscribe(list => {
        this.links = list;
        this.commonService.setApplications(this.links);
      });
    }
  }
}
