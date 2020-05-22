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
  public password: String;
  public result: any = {};
  public loading: Boolean = false;

  @Input() type;
  @Input() label;

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
    this.loading = true;
    this.commonService.execute(this.type, this.password, this.selectedType.toLowerCase(), ).subscribe(data => {
      this.result = data;
      this.loading = false;
    });
  }

}
