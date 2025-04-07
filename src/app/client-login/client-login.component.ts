import { Component, OnInit } from '@angular/core';
import { AppConfig } from "src/config/app.config";
import { ClientConfig } from "src/config/client.config";

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {
  footerIconPath;
  name;
  heading;
  message;  

  constructor() { }

  ngOnInit(){
    this.name = sessionStorage.getItem("clientName");
    this.heading = sessionStorage.getItem("heading");
    this.message = sessionStorage.getItem("message");
    const headerObject = ClientConfig.find(item => item.client === AppConfig.client)
    this.footerIconPath = headerObject.footerIconPath;
  }

}
