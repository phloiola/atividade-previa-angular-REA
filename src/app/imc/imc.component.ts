import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css'],
})
export class ImcComponent implements OnInit {
  altura: number;
  peso: number;
  imc: number;

  constructor() {}

  ngOnInit(): void {}
  public calcIMC() {
    if (!this.peso || !this.altura) {
      return;
    }

    this.imc = this.peso / ((this.altura * this.altura) / 10000);
    this.imc = parseFloat(this.imc.toFixed(2));
  }
}
