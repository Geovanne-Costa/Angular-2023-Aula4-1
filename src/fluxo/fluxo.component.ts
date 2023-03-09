import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fluxo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fluxo.component.html',
  styleUrls: ['./fluxo.component.css'],
})
export class FluxoComponent implements OnInit {
  n: number = 10;

  getNumbers() {
    let arr = [];
    for (let i = 1; i <= this.n; i++) {
      arr.push(Math.trunc(100 * Math.random()));
    }
    return arr;
  }

  constructor() {}

  ngOnInit() {}
}
