import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { Home }   from './home.component';
import { About }     from './about.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';

const appRoutes: Routes = [
  { path: 'home', component: Home },
  { path: 'about',component: About },

  { path: 'posts', component: PostsComponent  }
  
];
@NgModule({

  imports: [
    HttpModule,
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
     Home,
     About,
     
     PostsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
