import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Message } from '../models/message';
import * as Sentiment from 'sentiment';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  sentiment = new Sentiment();

  constructor(private firestore: AngularFirestore) {
   }

  getMessages() {
    return this.firestore.collection('messages').snapshotChanges();
  }

  createMessage(message: Message) {
    return this.firestore.collection('messages').add({...message});
  }

  computeSentimentScore(message: Message){
    const score: number = this.sentiment.analyze(message.message);
    message.score = score;
    return score;
  }

  //extra time delete and update messages
}
