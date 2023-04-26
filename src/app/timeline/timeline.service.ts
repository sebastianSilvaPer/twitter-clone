import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tweet } from '../tweet/tweet.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.getTweets();
  }

  feedTimeline() : Tweet[] {
    let tweets: Tweet[] = [];
    this.getTweets()
    .pipe(
      map(r=>r.sort((a, b) => {
        return a.time < b.time ? -1 : 1;
      }))
    )
    .subscribe(
      tweetsResponse => {
        tweetsResponse.forEach(tweet=>tweets.push(tweet))
      }
    );;

    return tweets;
  }

  filterTimeLine(filterText : string) : Tweet[] {
    let tweets: Tweet[] = [];
    let queryParam = new HttpParams();
    queryParam = queryParam.append("q",filterText);

    this.getTweets(queryParam)
    .pipe(
      map(r=>r.sort((a, b) => {
        return a.time < b.time ? -1 : 1;
      }))
    )
    .subscribe(
      tweetsResponse => {
        tweetsResponse.forEach(tweet=>tweets.push(tweet))
      }
    );;

    return tweets;
  }

  getTweets(queryParams? : HttpParams) : Observable<Tweet[]> {
    return this.http.get<Tweet[]>('http://localhost:3000/tweets', {params: queryParams});
  }
}
