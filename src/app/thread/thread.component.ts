import { Component, OnInit } from '@angular/core';
import { ThreadService } from './thread.service';
import { Tweet } from '../tweet/tweet.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit{
  constructor(private threadService: ThreadService,
     private activatedRoute: ActivatedRoute) {}
  tweets: Tweet[];

  ngOnInit(){
    this.setTweets(this.activatedRoute.snapshot.params['tweetId']);

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.setTweets(params['tweetId']);
      }
    )
  }

  setTweets(param: number){
    this.threadService
      .getTweet(param)
      .subscribe(response => {
        this.tweets = this.threadService.findThread(response);
      });
  }
}
