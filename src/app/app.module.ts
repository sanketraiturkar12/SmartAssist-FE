import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { GraphsComponent } from "./graphs/graphs.component";
import { ClientholdingComponent } from "./clientholding/clientholding.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { RecommendedactionComponent } from "./recommendedaction/recommendedaction.component";

import { DataserviceService } from "./dataservice.service";
import { HttpClientModule } from "@angular/common/http";

import { HighchartsChartModule } from "highcharts-angular";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { ClientPortfolioComponent } from "./client-portfolio/client-portfolio.component";
import { HomeComponent } from "./home/home.component";
import { TabComponent } from "./tab/tab.component";
import { TabsComponent } from "./tabs/tabs.component";
import { PortfolioScoreComponent } from "./portfolio-score/portfolio-score.component";
import { ClientRiskProfileComponent } from "./client-risk-profile/client-risk-profile.component";
import { ClientPortfolioHoldingsComponent } from "./client-portfolio-holdings/client-portfolio-holdings.component";
import { CommonModule } from "@angular/common";
import { ClientInsightsComponent } from "./client-insights/client-insights.component";
import { ClientGraphComponent } from "./client-graph/client-graph.component";
import { GraphTestComponent } from "./graph-test/graph-test.component";
import { ChartsModule } from "ng2-charts";
import { DoughnutChartComponent } from "./doughnut-chart/doughnut-chart.component";
import {ManageRelationshipComponent} from "./manage-relationship/manage-relationship.component";
import { FooterComponent } from './footer/footer.component';
import { SectorImpactComponent } from './sector-impact/sector-impact.component';
import { SectorDoughnutComponent } from './sector-doughnut/sector-doughnut.component';
import { TooltipDirective } from './tooltip.directive';
import { FormsModule } from '@angular/forms';
import { ClientLoginComponent } from './client-login/client-login.component';
import { StockSentimentComponent } from './stock-sentiment/stock-sentiment.component';
import { StockSentimentService } from './stock-sentiment.service';
import { MarketSentimentComponent } from './market-sentiment/market-sentiment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GraphsComponent,
    ClientholdingComponent,
    PortfolioComponent,
    RecommendedactionComponent,
    SidenavComponent,
    ClientPortfolioComponent,
    HomeComponent,
    TabComponent,
    TabsComponent,
    PortfolioScoreComponent,
    ClientRiskProfileComponent,
    ClientPortfolioHoldingsComponent,
    ClientInsightsComponent,
    ClientGraphComponent,
    GraphTestComponent,
    DoughnutChartComponent,
    ManageRelationshipComponent,
    FooterComponent,
    SectorImpactComponent,
    SectorDoughnutComponent,
    TooltipDirective,
    ClientLoginComponent,
    StockSentimentComponent,
    MarketSentimentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    HighchartsChartModule,
    ChartsModule,
    FormsModule
  ],
  providers: [StockSentimentService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
