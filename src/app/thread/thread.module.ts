import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreadComponent } from './thread.component';
import { TweetModule } from '../tweet/tweet.module';
import { HttpClientModule } from '@angular/common/http';
import { ThreadService } from './thread.service';

@NgModule({
  declarations: [
    ThreadComponent
  ],
  imports: [
    CommonModule,
    TweetModule,
    HttpClientModule
  ],
  exports: [
    ThreadComponent
  ],
  providers: [
    ThreadService
  ]
})
export class ThreadModule { }
