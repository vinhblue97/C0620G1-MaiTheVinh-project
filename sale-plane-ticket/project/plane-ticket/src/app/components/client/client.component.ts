import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

declare var $: any;

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  formSend: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  this.formSend = this.fb.group({
    id: '',
    content: '',
    sendDate: new Date(),
  })

    $(document).ready(function () {
      let content = "";
      $("#file-upload").hide();

      $(".openChatBtn").click(function () {
        $(".requiredChat").show("1000");
        $(".openChatBtn").hide();
      })
      $(".close").click(function () {
        $(".openChat").hide();
        $(".requiredChat").hide();
        $(".openChatBtn").show("1000");
      })
      $(".begin-chat").click(function () {
        $(".openChat").hide();
        $(".requiredChat").hide();
        $(".openChat").show("1000");
        $("#icon-box").hide();
      })
      $("#icon").click(function () {
        $("#icon-box").toggle("500");
      })

      $("#icon-upload-file").click(function () {
        $("#file-upload")[0].click();
      })

    })
  }

  sendMessage() {
    console.log(this.formSend.value);
  }
}
