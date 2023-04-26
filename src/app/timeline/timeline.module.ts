import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import { TweetModule } from '../tweet/tweet.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { IconComponent } from './search-bar/icon/icon.component';
import { HttpClientModule } from '@angular/common/http'
import { TimelineService } from './timeline.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TimelineComponent,
    SearchBarComponent,
    IconComponent
  ],
  imports: [
    CommonModule,
    TweetModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    TimelineComponent
  ],
  providers: [
    TimelineService
  ]
})
export class TimelineModule { }
