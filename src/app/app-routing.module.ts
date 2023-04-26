import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineModule } from './timeline/timeline.module';
import { ThreadComponent } from './thread/thread.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ThreadModule } from './thread/thread.module';
import { TopicModule } from './topic/topic.module';
import { TopicComponent } from './topic/topic.component';

const routes: Routes = [
  {path: '', component: TimelineComponent},
  {path: 'timeline', component: TimelineComponent},
  {path: 'thread/:tweetId', component: ThreadComponent},
  {path: 'topics/:country', component: TopicComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TimelineModule,
    ThreadModule,
    TopicModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
