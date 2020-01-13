import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Inject
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Chart } from "chart.js";
@Component({
  selector: "app-fund-performance-trend",
  templateUrl: "./fund-performance-trend.component.html",
  styleUrls: ["./fund-performance-trend.component.scss"]
})
export class FundPerformanceTrendComponent implements OnInit {
  public assetAllocation = [];
  public title = "chartApp";
  public myChart: any = [];
  @ViewChild("lineChart", { static: true }) chartElem: ElementRef;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private elem: ElementRef
  ) {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.myChart = new Chart(this.chartElem.nativeElement, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ], // your labels array
        datasets: [
          {
            label: "Chart 1",
            data: [
              { x: 1, y: 2 },
              { x: 2, y: 4 },
              { x: 3, y: 8 },
              { x: 4, y: 16 }
            ],
            showLine: true,
            fill: false,
            borderColor: "rgba(0, 200, 0, 1)"
          },
          {
            label: "Chart 2",
            data: [
              { x: 1, y: 3 },
              { x: 3, y: 4 },
              { x: 4, y: 6 },
              { x: 6, y: 9 }
            ],
            showLine: true,
            fill: false,
            borderColor: "rgba(200, 0, 0, 1)"
          },
          {
            label: "Chart 3",
            data: [
              { x: 2, y: 3 },
              { x: 4, y: 6 },
              { x: 6, y: 9 },
              { x: 8, y: 12 }
            ],
            showLine: true,
            fill: false,
            borderColor: "rgba(0, 200, 0, 1)"
          },
          {
            label: "Chart 4",
            data: [
              { x: 2, y: 5 },
              { x: 4, y: 7 },
              { x: 6, y: 8 },
              { x: 9, y: 16 }
            ],
            showLine: true,
            fill: false,
            borderColor: "rgba(0, 0, 200, 1)"
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
        }
      }
    });
  }
}
