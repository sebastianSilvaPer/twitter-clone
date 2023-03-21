import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class ContentTextComponent {
  @Input() value : string;
}
