import { Component, Input } from '@angular/core';
import { Tweet } from '../../tweet.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  @Input() tweet: Tweet;
}
