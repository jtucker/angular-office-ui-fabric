import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface ILinkItem {
  title: string;
  item: any;
}

@Component({
  selector: 'ui-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  @Input() linkItems: Observable<Array<ILinkItem>>;
  @Output() itemClick = new EventEmitter<ILinkItem>();
  @Input() showOverflow = true;

  constructor() { }

  ngOnInit() {
    this.linkItems.subscribe(items => console.log(items));
  }

  /**
   * Emit the item that was clicked.
   */
  emitLinkClickedEvent(event: Event, linkItem: ILinkItem) {
    this.itemClick.emit(linkItem);
  }

  overflowMenuClicked() {
    
  }

}
