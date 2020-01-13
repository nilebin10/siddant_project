import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllTimeComponent } from "./investement-allocation/all-time/all-time.component";
import { ThisYearComponent } from "./investement-allocation/this-year/this-year.component";
import { ThisMonthComponent } from "./investement-allocation/this-month/this-month.component";
import { ThisWeekComponent } from "./investement-allocation/this-week/this-week.component";

const routes: Routes = [
  { path: "all-time", component: AllTimeComponent },
  { path: "this-year", component: ThisYearComponent },
  { path: "this-month", component: ThisMonthComponent },
  { path: "this-week", component: ThisWeekComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
