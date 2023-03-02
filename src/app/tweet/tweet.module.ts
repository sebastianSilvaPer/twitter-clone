import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './profile/photo/photo.component';
import { InfoComponent } from './profile/info/info.component';
import { NameComponent } from './profile/info/name/name.component';
import { AccountNameComponent } from './profile/info/account-name/account-name.component';
import { IconComponent } from './footer/icon/icon.component';
import { TweetComponent } from './tweet.component';
import { AttachmentsComponent } from './content/attachments/attachments.component';
import { ContentTextComponent } from './content/text/text.component';

@NgModule({
  declarations: [
    PhotoComponent,
    InfoComponent,
    NameComponent,
    AccountNameComponent,
    IconComponent,
    TweetComponent,
    AttachmentsComponent,
    ContentTextComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    TweetComponent
  ]
})
export class TweetModule { }
