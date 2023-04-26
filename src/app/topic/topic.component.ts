import { Component, OnInit } from '@angular/core';
import { Topic } from './topic.model';
import { TopicService } from './topic.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit{
  topics: Topic[];

  constructor(
    private topicService: TopicService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ){}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.topics = this.topicService.findTopics(params['country']);
      }
    )
  }

  foundTopicTimeline(topic: Topic) {
    this.router.navigate(['timeline'],
    { queryParams: {text: topic.topic} });
  }
}
