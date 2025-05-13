import { AfterViewInit, Component, VERSION } from '@angular/core';
import * as introJs from 'intro.js';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' }
  ];

  ngAfterViewInit(): void {
    this.initIntroJs();
    this.introJS.start();
  }

  initIntroJs() {
    this.introJS.setOptions({
        tooltipClass: 'customTooltip',
        highlightClass: 'customHighlight',
        exitOnOverlayClick: false,
        disableInteraction: false,
        steps: [
          {
            intro: 'Welcome to the web let me show you around!'
          },
          {
            element: document.getElementById('step1'),
            intro: 'Material Card Component',
            position: 'right'
          },
          {
            element: document.getElementById('step2'),
            intro: 'Material Grid Component',
            position: 'right'
          },
          {
            element: document.getElementById('step3'),
            intro: 'Material Button Component',
            position: 'right'
          },
          {
            element: document.getElementById('step4'),
            intro: 'Button inside material card component',
            position: 'right'
          }
        ]
      })
  }
}
