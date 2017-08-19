import { Component } from '@angular/core';
import { vechile }    from './vehicle.component';






@Component({
  selector: 'app',
  templateUrl: './home.component.html',
  styleUrls: ['./style.component.css']
})
export class Home {
  submitted = false;
 model = new vechile(18, 'Dr IQ', 'Chuck Overstreet');
get diagnostic() { return JSON.stringify(this.model); }
}
