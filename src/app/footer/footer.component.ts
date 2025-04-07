import { Component, OnInit } from "@angular/core";
import { AppConfig } from "src/config/app.config";
import { ClientConfig } from "src/config/client.config";
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerIconPath
  constructor(public router: Router) { }
  ngOnInit(){
    const headerObject = ClientConfig.find(item => item.client === AppConfig.client)
    this.footerIconPath = headerObject.footerIconPath;
  }
}
