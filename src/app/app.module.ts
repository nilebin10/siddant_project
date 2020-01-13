import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DoughnutComponent } from "./doughnut/doughnut.component";
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./header/search/search.component";
import { AssetCollectionComponent } from "./asset-collection/asset-collection.component";
import { AssetItemsComponent } from "./asset-collection/asset-items/asset-items.component";
import { AssetItemComponent } from "./asset-collection/asset-items/asset-item/asset-item.component";
import { UserDetailsComponent } from "./asset-collection/user-details/user-details.component";
import { InvestementAllocationComponent } from "./investement-allocation/investement-allocation.component";
import { AllTimeComponent } from "./investement-allocation/all-time/all-time.component";
import { ThisYearComponent } from "./investement-allocation/this-year/this-year.component";
import { ThisMonthComponent } from "./investement-allocation/this-month/this-month.component";
import { ThisWeekComponent } from "./investement-allocation/this-week/this-week.component";
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { AllTimeCardComponent } from "./investement-allocation/all-time/all-time-card/all-time-card.component";
import { FundPerformanceProjectionComponent } from "./fund-performance-projection/fund-performance-projection.component";
import { FundPerformanceTrendComponent } from "./fund-performance-projection/fund-performance-trend/fund-performance-trend.component";
import { FutureProjectionComponent } from "./fund-performance-projection/future-projection/future-projection.component";
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    DoughnutComponent,
    HeaderComponent,
    SearchComponent,
    AssetCollectionComponent,
    AssetItemsComponent,
    AssetItemComponent,
    UserDetailsComponent,
    InvestementAllocationComponent,
    AllTimeComponent,
    ThisYearComponent,
    ThisMonthComponent,
    ThisWeekComponent,
    AllTimeCardComponent,
    FundPerformanceProjectionComponent,
    FundPerformanceTrendComponent,
    FutureProjectionComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
