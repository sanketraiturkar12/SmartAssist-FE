import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  select(tab: TabComponent) {
    this.tabs.toArray().forEach(tab => {
      tab.active = false;
    });
    tab.active = true;
  }

  ngAfterContentInit() {

    let actives = this.tabs.filter((tab) => tab.active);

    if(actives.length === 0)
      this.select(this.tabs.first);

  }

}
