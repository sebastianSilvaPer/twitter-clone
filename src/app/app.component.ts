import { Component } from '@angular/core';
import { Tweet } from './tweet/tweet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tweet : Tweet = {
    profileName: 'Sebastian Silva',
    profileImage: 'https://static-cdn.jtvnw.net/jtv_user_pictures/5f5fee7c-a221-4b6e-bee6-66577750a0f5-profile_image-70x70.png',
    profileAccountName: "SebasSilva37",
    time: "1h",
    text: "Un nuevo dia programanding",
    attachments: [
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cristiano-ronaldo-of-portugal-looks-dejected-following-news-photo-1624346993.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*",
      // "https://s.hs-data.com/bilder/spieler/gross/26622.jpg"
    ],
    likes: 360,
    retweets: 789,
    comments:21,
    views: 250
  };

  title = 'twitter-clone';
}
