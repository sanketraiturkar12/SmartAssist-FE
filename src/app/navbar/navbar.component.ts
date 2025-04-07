import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

import { Router } from '@angular/router';
import { ClientConfig } from 'src/config/client.config';
import { AppConfig } from 'src/config/app.config';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userDetails: any;
  topnavbarDetails: any[];
  headerIconPath
  selectedClient;
  topsp: boolean;

  constructor(private myservice: DataserviceService, public router: Router) { }


  sortBy(field): any {
    return function (a, b) {
      return Number(a[field] < b[field]) - Number(a[field] > b[field])

    };
  }

  goToClientPortFolio() {
    this.router.navigate(['portfolios']);
  }

  goToHome() {
    this.router.navigate(['']);
  }


  ngOnInit(): void {
    this.selectedClient = AppConfig.client;
    this.myservice.getuserName(1).subscribe((data) => {
      this.userDetails = data["data"];
      localStorage.setItem('userDetails', this.userDetails.Name);
    });

    this.myservice.getnavbarTop(1).subscribe((data) => {
      this.topnavbarDetails = data["data"];
      this.topnavbarDetails.forEach((element, index) => {
        if (this.topnavbarDetails[index]["symbol"] === "up-arrow") {
          this.topnavbarDetails[index]["mysymbol"] = true
        } else {
          this.topnavbarDetails[index]["mysymbol"] = false
        }
      })
      this.topnavbarDetails.sort(this.sortBy('Ticker'));
    });

    const headerObject = ClientConfig.find(item => item.client === AppConfig.client)
    this.headerIconPath = headerObject.headerIconPath;
  }
}
