import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MeComponent } from './me/me.component';
import { TimerComponent } from './timer/timer.component';
import { FluxoComponent } from './fluxo/fluxo.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MeComponent, TimerComponent, FluxoComponent],
  template: `
    <h1>{{name}}</h1>
    <hr>
    <app-me></app-me>
    <hr>
    <app-timer></app-timer>
    <hr>
    <app-fluxo></app-fluxo>
  `,
})
export class App {
  name = 'App1';
}

bootstrapApplication(App);
