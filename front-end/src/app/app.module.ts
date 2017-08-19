import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { Home }   from './home.component';
import { About }     from './about.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';

import { Form } from './form.component';
import { vechile } from './vehicle.component';

const appRoutes: Routes = [
  { path: 'home', component: Home },
  { path: 'about',component: About },

  { path: 'posts', component: PostsComponent  }
  
];
@NgModule({

  imports: [
    HttpModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
    // other imports here
  ],

  declarations: [
    AppComponent,
     Form,
     Home,
     About,
     
     PostsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
