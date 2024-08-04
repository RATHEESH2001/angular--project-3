import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import * as $ from 'jquery';
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  $(document).ready(function() {
    // Attach a click event handler to the button element
    $("#alertButton").click(function() {
      // Show an alert dialog when the button is clicked
      alert("This is a jQuery-based alert!");
    });
  });
  console.log(alert);