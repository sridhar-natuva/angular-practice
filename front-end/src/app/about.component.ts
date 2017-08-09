import { Component } from '@angular/core';







@Component({
  selector: 'app',
  templateUrl: './about.component.html',
  styleUrls: ['./style.component.css']
})
export class About {
  message = [{text :'some text',owner :'sridhar'},{text :'some more text',owner :'rahul'}];
}
