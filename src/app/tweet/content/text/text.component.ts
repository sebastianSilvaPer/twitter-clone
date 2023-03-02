import { Component } from '@angular/core';

@Component({
  selector: 'app-content-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class ContentTextComponent {
  value : string = `Tweet de apreciación a mi hijo, fan de Messi y Duki, amante del fútbol,
  gauchito y caballerito defensor de la patria Argentina y sobre todo de mi
  corazón`;
}
