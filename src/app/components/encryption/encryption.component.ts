import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-encryption',
  templateUrl: './encryption.component.html',
  styleUrls: ['./encryption.component.sass']
})
export class EncryptionComponent implements OnInit {

  private type: string;
  public selectedType: string;
  public selectedInput: string;
  public envs = ['Dev', 'Test', 'Prod'];
  public inputs = ['String', 'File'];
  public title = '';

  constructor(private commService: CommonService) {
   }

  ngOnInit() {
  }

  submit() {
  }

}
