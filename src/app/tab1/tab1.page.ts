import { Component, SystemJsNgModuleLoader } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Message } from '../models/message';
import * as Sentiment from 'sentiment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  messages: Message[];
  message: Message;

  constructor(private messageService: MessageService) {
    this.message = new Message();
    this.messages = [];
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getMessages(); // runs get messages function every time the component is viewed
  }

  getMessages() {
    this.messageService.getMessages().subscribe(data => {
      this.messages = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Message;
      })
      this.messages.sort((message1, message2) => ((message1.dateCreated < message2.dateCreated) ? 1 : -1)); // order messages (optional)
    });
  }

  createMessage() {
    this.messageService.createMessage(this.message);
  }

  send(){
    this.message.id="1";
    this.message.score=2;
    this.message.dateCreated=new Date().toISOString();
    console.log(this.message);
    this.createMessage();
  }
}
