import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Topic } from './topic.model';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  findTopics(country : string) : Topic[] {
    let topics: Topic[] = [];
    let queryParam = new HttpParams();
    queryParam = queryParam.append("country", country);
    queryParam = queryParam.append('_', ('444'+(new Date())))

    this.getTopicsByCountry(queryParam)
    .pipe(
      map((topics: Topic[])=>topics.sort((firstTopic, secondTopic) => {
        return firstTopic.topic.localeCompare(secondTopic.topic);
      }))
    )
    .subscribe(
      topicsResponse => {
        topicsResponse.forEach(topic=>topics.push(topic))
      }
    );

    return topics;
  }

  getTopicsByCountry(queryParams? : HttpParams) : Observable<Topic[]> {
    return this.http.get<Topic[]>(`http://localhost:3000/topics`, {params: queryParams});
  }

}
