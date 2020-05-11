import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.sass']
})
export class OptionComponent implements OnInit {

  public selectedType: string;
  public selectedInput: string;
  public envs = ['Dev', 'Test', 'Prod'];
  public inputs = ['String', 'File'];

  constructor() { }

  ngOnInit() {
  }

  selectType($event): void {
    this.selectedType = $event.target.value;
  }
  selectInput($event): void {
    console.log('hello'); 
    this.selectedInput = $event.target.value;
  }

}
