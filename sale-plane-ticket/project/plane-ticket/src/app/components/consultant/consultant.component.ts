import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.css']
})
export class ConsultantComponent implements OnInit {
  public messageList: Array<string> = [];
  public customer

  constructor() { }

  ngOnInit() {
  }

  sendMessage(content: HTMLInputElement) {
    this.messageList.push(content.value);
    console.log(this.messageList);

  }

  sendRequestMess() {

  }
}
