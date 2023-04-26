import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { IconComponent } from './icon-text/icon/icon.component';
import { IconTextComponent } from './icon-text/icon-text.component';


@NgModule({
  declarations: [
    MenuComponent,
    IconComponent,
    IconTextComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
