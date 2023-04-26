import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tweet } from '../tweet/tweet.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  constructor(private http: HttpClient) { }

  findThread(tweet : Tweet) : Tweet[] {
    let tweets: Tweet[] = [tweet];
    let queryParam = new HttpParams();
    queryParam = queryParam.append("parentId", tweet.id);

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
    );

    console.log(tweets);

    return tweets;
  }

  getTweet(id: number): Observable<Tweet> {
    return this.http
        .get<Tweet>('http://localhost:3000/tweets/'+id+'?_=444'+ (+(new Date())));

  }

  getTweets(queryParams? : HttpParams) : Observable<Tweet[]> {
    return this.http.get<Tweet[]>('http://localhost:3000/tweets', {params: queryParams});
  }
}
