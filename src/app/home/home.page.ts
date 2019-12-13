import { Component } from '@angular/core';
import 'ae-d3-stencil';

const BCG_MATRIX_CHART_DATA = {
  BcgMatrixchart: {
    axis: {
      y: {
        format: 'PERCENTAGE',
      },
    },
    value: {
      format: 'GROUPED_TWO_DIGITS',
    },
    margin: {
      top: 20,
      right: 40,
      bottom: 20,
      left: 40,
    },
  },
  styles: {
    width: '100%',
    height: '500px',
    margin: '20px 0',
  },
  colors: [
    '#98abc5',
    '#7b6888',
    '#7b6888',
    '#ff8c00',
    '#d0743c',
    '#ff8c00',
    '#ff8c00',
  ],
  labels: ['<5', '5-13', '14-17', '18-24', '25-44', '45-64', '≥65'],
  data: [
    {
      x_data: 0.43,
      y_data: 0.65,
      rel_size: 648860,
      // tslint:disable-next-line: max-line-length
      tooltipInfo: `<b>Current:</b><div class="square stars"></div> 5 weeks<br>Overview: <div class="square stars"></div> 10 weeks <div class="square question-mark"></div> 30 weeks`,
    },
    {
      x_data: 0.16,
      y_data: 0.34,
      rel_size: 588399,
      // tslint:disable-next-line: max-line-length
      tooltipInfo: `<b>Current:</b><div class="square cash_cows"></div> 5 weeks<br>Overview: <div class="square cash_cows"></div> 10 weeks <div class="square dogs"></div> 30 weeks`,
    },
    {
      x_data: 0.33,
      y_data: 0.22,
      rel_size: 177443,
      // tslint:disable-next-line: max-line-length
      tooltipInfo: `<b>Current:</b><div class="square cash_cows"></div> 5 weeks<br>Overview: <div class="square cash_cows"></div> 10 weeks <div class="square dogs"></div> 30 weeks`,
    },
    {
      x_data: 1.66,
      y_data: 0.72,
      rel_size: 729405,
      // tslint:disable-next-line: max-line-length
      tooltipInfo: `<b>Current:</b><div class="square question-mark"></div> 5 weeks<br>Overview: <div class="square question-mark"></div> 10 weeks <div class="square stars"></div> 30 weeks`,
    },
    {
      x_data: 1.5,
      y_data: 0.22,
      rel_size: 838025,
      // tslint:disable-next-line: max-line-length
      tooltipInfo: `<b>Current:</b><div class="square dogs"></div> 5 weeks<br>Overview: <div class="square dogs"></div> 10 weeks <div class="square dogs"></div> 30 weeks`,
    },
    {
      x_data: 1.21,
      y_data: 0.85,
      rel_size: 269605,
      // tslint:disable-next-line: max-line-length
      tooltipInfo: `<b>Current:</b><div class="square question-mark"></div> 5 weeks<br>Overview: <div class="square question-mark"></div> 10 weeks <div class="square dogs"></div> 30 weeks`,
    },
    {
      x_data: 1.21,
      y_data: 0.57,
      rel_size: 569985,
      // tslint:disable-next-line: max-line-length
      tooltipInfo: `<b>Current:</b><div class="square question-mark"></div> 5 weeks<br>Overview: <div class="square question-mark"></div> 10 weeks <div class="square question-mark"></div> 30 weeks`,
    },
  ],
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    console.log('ngOnInit ');
  }
}
