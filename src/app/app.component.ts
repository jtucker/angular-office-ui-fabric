import { ILinkItem } from './office-ui-fabric/components/breadcrumb/breadcrumb.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  linkItems$: Observable<Array<ILinkItem>>;

  alert() {
    console.log('ALLLARM');
  }

  ngOnInit(): void {
    this.linkItems$ = Observable.of([
      { title: 'Link 1' }, { title: 'Link 2' }, { title: 'Link 3' },
      { title: 'Link 1' }, { title: 'Link 2' }, { title: 'Link 3' },
      { title: 'Link 1' }, { title: 'Link 2' }, { title: 'Link 3' }
    ]);
  }

  linkItemClicked(linkClicked: ILinkItem) {
    console.log(linkClicked);
  }

}
