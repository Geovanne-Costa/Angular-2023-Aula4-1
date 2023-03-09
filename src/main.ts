import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MeComponent } from './me/me.component';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MeComponent, TimerComponent],
  template: `
    <h1>{{name}}</h1>
    <hr>
    <app-me></app-me>
    <hr>
    <app-timer></app-timer>
  `,
})
export class App {
  name = 'App1';
}

bootstrapApplication(App);
