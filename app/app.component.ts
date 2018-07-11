import { Component } from "@angular/core";
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My Apple" class="action-bar"></ActionBar>
    <Image src="~/images/apple.jpg"></Image>
  `,
  styles: [`
    @keyframes spin {
      from { transform: rotate(0); } to { transform: rotate(360); }
    }
    Image {
      animation-name: spin; animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  `]
})
export class AppComponent {
  constructor(analytics: Angulartics2GoogleAnalytics) {
    console.dir({
      type: "Apple",
      color: "Red"
    });
  }
}