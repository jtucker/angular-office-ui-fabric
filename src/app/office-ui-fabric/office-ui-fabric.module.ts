import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  ButtonDescriptionComponent,
  IconComponent,
  BreadcrumbComponent
} from './components';

const componentList = [
    ButtonComponent,
    ButtonDescriptionComponent,
    BreadcrumbComponent,
    IconComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: componentList,
  exports: componentList
})
export class OfficeUiFabricModule { }
