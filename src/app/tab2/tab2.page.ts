import { Chart } from 'chart.js';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Options } from 'selenium-webdriver/ie';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  @ViewChild('chartContainer', {static: false}) chartcontainer: ElementRef;
  @ViewChild('chartcanvas', {static: false} ) chartcanvas: ElementRef;

  myChart: Chart;

  constructor() {}

  ngAfterViewInit() {
    this.createChart();
  }


  createChart() {   
    console.log("hey")

    this.myChart = new Chart(this.chartcanvas.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
