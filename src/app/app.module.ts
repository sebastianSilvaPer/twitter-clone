import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineModule } from './timeline/timeline.module';
import { TweetModule } from './tweet/tweet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TweetModule,
    TimelineModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
