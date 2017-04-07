import { Component, OnInit, Input } from '@angular/core';

type ButtonTypes = 'command' | 'compound' | 'hero' | 'primary';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() buttonType: ButtonTypes;
  @Input() disabled: boolean;

  buttonClasses = ['ms-Button'];

  constructor() { }

  ngOnInit() {
    switch (this.buttonType) {
      case 'command' : {
        this.buttonClasses.push('ms-Button--command');
        break;
      }
      case 'compound' : {
        this.buttonClasses.push('ms-Button--compound');
        break;
      }
      case 'hero' : {
        this.buttonClasses.push('ms-Button--hero');
        break;
      }
      case 'primary' : {
        this.buttonClasses.push('ms-Button--primary');
        break;
      }
    }
  }
}
