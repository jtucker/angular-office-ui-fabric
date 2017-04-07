import { Component } from '@angular/core';

@Component({
 selector: 'ui-button-description',
 template: `
     <span class="ms-Button-description">
       <ng-content></ng-content>
     </span>
 `
})
export class ButtonDescriptionComponent { }
