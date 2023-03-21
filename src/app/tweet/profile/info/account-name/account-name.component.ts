import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-account-name',
  templateUrl: './account-name.component.html',
  styleUrls: ['./account-name.component.scss']
})
export class AccountNameComponent {
  @Input() accountName:string;
}
