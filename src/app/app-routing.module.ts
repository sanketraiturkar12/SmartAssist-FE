import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientPortfolioComponent } from "./client-portfolio/client-portfolio.component";
import { HomeComponent } from "./home/home.component";
import { ClientLoginComponent } from './client-login/client-login.component';
import { StockSentimentComponent } from './stock-sentiment/stock-sentiment.component';
import { MarketSentimentComponent } from './market-sentiment/market-sentiment.component';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "portfolios", component: ClientPortfolioComponent },
  { path: "login", component: ClientLoginComponent },
  { path: 'stock-sentiment', component: StockSentimentComponent },
  { path: 'market-sentiment', component: MarketSentimentComponent }, // New route
  // { path: "**", component: HomeComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
