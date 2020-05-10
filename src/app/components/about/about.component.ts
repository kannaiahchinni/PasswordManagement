import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  public about = `CmedVerify is a pioneer in Dataflow application 
  processing and licensing examination registration services conducted by various regulatory 
  bodies in different countries`;
  public countries = [];

  constructor() { }

  ngOnInit() {
    this.countries = [
      {name:'Singapore', abb:'MOMS', flag:'sg', text: 'Ministry of Manpower'},
      {name: 'Saudi', abb: 'SCFHS', flag:'sa'},
      {name: 'Dubai', abb: 'DHA', flag: 'ae'},
      {name: 'Abu Dhabi', abb: 'HAAD/DOH', flag:'ae'},
      {name: 'Qatar', abb: 'QCHP/MOH', flag: 'qa'},
      {name: 'Behrain', abb: 'NHRA', flag: 'bh'},
      {name: 'Kuwait', abb: 'OMSB', flag: 'kw'},
      {name: 'Oman', abb: 'OMSB', flag: 'om'}
    ]
  }

}
