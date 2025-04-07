import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-score',
  templateUrl: './portfolio-score.component.html',
  styleUrls: ['./portfolio-score.component.css']
})
export class PortfolioScoreComponent implements OnInit {
  @Input() portfolioScore: number | null = null; // Portfolio Sentiment Score passed from parent
  @Input() clientName: string; // Client Name passed from parent
  @Input() riskProfileObj: any; // Risk Profile Object passed from parent

  profileName: string;
  profileDescription: string;

  ngOnInit(): void {
    if (this.riskProfileObj) {
      this.profileDescription = this.riskProfileObj["Risk_Profile_Desc"];
      this.profileName = this.riskProfileObj["risk_profile_name"];
    }
    console.log('Portfolio Score in PortfolioScoreComponent:', this.portfolioScore);
  }
}