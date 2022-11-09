import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'COUNTER';
  count = 0;

  add() {
    this.count += 1;
  }
  remove() {
    this.count -= 1;
  }
  reset() {
    this.count = 0;
  }
}
