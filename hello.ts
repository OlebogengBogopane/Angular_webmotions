import 'zone.js';
import { Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

// describe component
@Component({
  selector: 'add-one-button', // component name used in markup
  template: // the component's markup
  `
   <button (click)="count = count + 1">Add one</button> {{ count }}
  `,
})
export class AddOneButtonComponent {
  count = 0;
}

// define module
@NgModule({
  declarations: [AddOneButtonComponent],
  imports: [BrowserModule],
  bootstrap: [AddOneButtonComponent],
})

// bootstrap application
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
