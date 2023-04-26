import { Component, Input } from '@angular/core';
import { Option } from '../option.model';

@Component({
  selector: 'app-icon-text',
  templateUrl: './icon-text.component.html',
  styleUrls: ['./icon-text.component.scss']
})
export class IconTextComponent {
  @Input() option: Option;
}
