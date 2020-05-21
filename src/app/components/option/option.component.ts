import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.sass']
})
export class OptionComponent implements OnInit {

  public selectedType: string;
  public selectedInput: string;
  public envs = ['Dev', 'Test', 'Prod'];
  public inputs = ['String'];

  @Input() type;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  selectType($event): void {
    this.selectedType = $event.target.value;
  }
  selectInput($event): void {
    this.selectedInput = $event.target.value;
  }

  submit() {
    debugger;
    this.commonService.execute(this.type, this.selectedType.toLowerCase(), this.selectedInput).subscribe(data => {
      console.log(data);
    });
  }

}
