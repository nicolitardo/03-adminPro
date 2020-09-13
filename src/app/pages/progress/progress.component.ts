import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

    progreso1 = 25;
    progreso2 = 35;

    get getProgeso1() {
      return `${ this.progreso1 }%`;
    }

    get getProgeso2() {
      return `${ this.progreso2 }%`;
    }

    cambioValorHijo( valor: number ) {
      this.progreso1 = valor;
    }
}
