import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from '../tweet/tweet.model';
import { TimelineService } from './timeline.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit{
  tweets : Tweet[] = [];
  searchForm: FormGroup;

  constructor(private timelineService: TimelineService,
    private acticatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      'searchText' : new FormControl(null)
    });



    this.acticatedRoute.queryParams.subscribe(
      (params: Params) => {
        if(params['text']){
          this.tweets = this.timelineService.filterTimeLine(params['text']);
        }else {
          this.tweets = this.timelineService.feedTimeline();
        }
      }
    )
  }

  onSearchText(searchText: string) {
    this.router.navigate(['timeline'],
    { queryParams: {text: searchText} });
  }

}
