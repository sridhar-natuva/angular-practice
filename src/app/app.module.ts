import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Home }   from './home.component';
import { About }     from './about.component';

const appRoutes: Routes = [
  { path: 'home', component: Home },
  { path: 'about',component: About }
  
];
@NgModule({

  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
    // other imports here
  ],

  declarations: [
    AppComponent,
     Home,
     About
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
