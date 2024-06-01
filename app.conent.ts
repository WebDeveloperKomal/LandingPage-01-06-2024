
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.header.html',
//   styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTab: string = 'billing'; // Default tab

  setTab(tabName: string): void {
    this.currentTab = tabName;
  }
}
