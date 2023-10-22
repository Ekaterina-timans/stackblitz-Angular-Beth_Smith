import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { InfoRickComponent } from './info-rick/info-rick.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, InfoRickComponent],
  template: `
    <app-info-rick></app-info-rick>
    `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
