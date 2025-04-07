import { Component, Input, ContentChildren } from '@angular/core';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})

export class TabComponent {
  @Input() active: boolean;
  @Input() tabTitle: string;
  @Input() notificationCount: number = 0;
}
