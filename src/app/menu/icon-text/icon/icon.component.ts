import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() icon: string;
  @Input() circleClass: string;
}
