import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fluxo',
  standalone: true,
  templateUrl: './fluxo.component.html',
  styleUrls: ['./fluxo.component.css'],
})
export class FluxoComponent implements OnInit {
  getNumbers() {
    return [10, 5, 1, 15, 62, 72, 36, 12];
  }

  constructor() {}

  ngOnInit() {}
}
