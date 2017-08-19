import { Component } from '@angular/core';

import { vechile }    from './vehicle.component';

@Component({
  selector: 'vechile',
  templateUrl: './home.component.html'
})
export class Form {
 submitted = false;
 model = new vechile(18, 'Dr IQ', 'Chuck Overstreet');
get diagnostic() { return JSON.stringify(this.model); }
}