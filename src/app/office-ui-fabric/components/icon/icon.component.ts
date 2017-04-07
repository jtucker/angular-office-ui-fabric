import { Component, OnInit, Input } from '@angular/core';
import { IconTypes } from './icon-types';

@Component({
  selector: 'ui-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() icon: IconTypes;
  iconClasses = ['ms-Icon'];

  constructor() { }

  ngOnInit() {
    this.iconClasses.push(`ms-Icon--${this.icon}`);
  }

}
