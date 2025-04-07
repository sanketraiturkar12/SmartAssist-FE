import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-client-risk-profile",
  templateUrl: "./client-risk-profile.component.html",
  styleUrls: ["./client-risk-profile.component.css"],
})
export class ClientRiskProfileComponent implements OnInit {
  @Input() riskProfileObj: any;
  profileName;
  profileDescription;
  @Input() clientName: string;
  constructor() {}

  ngOnInit(): void {
    if (this.riskProfileObj) {
      this.profileDescription = this.riskProfileObj["Risk_Profile_Desc"];
      this.profileName = this.riskProfileObj["risk_profile_name"];
    }
  }
}
