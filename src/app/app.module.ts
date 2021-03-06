import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';

import { ChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


myChart: Chart;


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    ChartsModule,
    IonicModule.forRoot(), 
    AppRoutingModule, 

    AngularFireModule.initializeApp(environment.firebase)],
  providers: [
    AngularFirestore,
    StatusBar,
    SplashScreen,
    AngularFirestore,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
