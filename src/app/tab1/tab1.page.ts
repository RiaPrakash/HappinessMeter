import { Component, SystemJsNgModuleLoader } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Message } from '../models/message';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  // messagesTemp: string[];
  messageExample: Message[];
  messages: Message[];
  message: Message;

  constructor(private messageService: MessageService,
    private alertCon: AlertController) {
    this.message = new Message();
    this.messages = [];
    // this.messagesTemp = ['hi', 'hey', 'sup'];
    this.messageExample = [{  id: '1',
      score: 3,
      message: 'yay love and happiness',
      dateCreated: '17/05/1999',
      owner: 'ria'
    },
    {  id: '2',
      score: 3,
      message: 'amazine',
      dateCreated: '17/05/1999',
      owner: 'amik'
    }
  ]
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getMessages(); // runs get messages function every time the component is viewed
  }

  //gets message from the database
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

  async tooNegative(){
    const alert = await this.alertCon.create({
      header: 'Bad Message',
      message: 'Sorry, your message is way too negative. Try be more positive, I guess?',
      buttons: [{
        text: 'Close',
        role: 'cancel'
      }]
    });
    return await alert.present();
  }

  send(){
    this.message.id="1"; //edit this
    this.messageService.computeSentimentScore(this.message);
    this.message.dateCreated=new Date().toISOString();
    if(this.message.score > 0.2){
      this.createMessage();
    } else {
      this.tooNegative();
    }
    
  }
}
