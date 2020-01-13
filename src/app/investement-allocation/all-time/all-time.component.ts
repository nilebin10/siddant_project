import {
  Component,
  OnInit,
  Inject,
  ElementRef,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Chart } from "chart.js";

@Component({
  selector: "app-all-time",
  templateUrl: "./all-time.component.html",
  styleUrls: ["./all-time.component.scss"]
})
export class AllTimeComponent implements OnInit, AfterViewInit {
  public assetAllocation = [];
  public title = "chartApp";
  public myChart: any = [];

  ngOnInit() {
    this.assetAllocation = [
      {
        name: "Available funds",
        percent: "95%",
        price: "$15"
      },
      {
        name: "Mutual fund",
        percent: "65%",
        price: "$15"
      },
      {
        name: "Equity funds",
        percent: "25%",
        price: "$15"
      },
      {
        name: "Tax Saver",
        percent: "35%",
        price: "$15"
      },
      {
        name: "Index funds",
        percent: "45%",
        price: "$15"
      }
    ];
  }

  @ViewChild("chart", { static: true }) chartElem: ElementRef;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private elem: ElementRef
  ) {}

  ngAfterViewInit() {
    const ctx = this.document.querySelector("#chart");
    this.myChart = new Chart(this.chartElem.nativeElement, {
      type: "pie",
      data: {
        labels: ["OK", "WARNING", "CRITICAL", "UNKNOWN"],
        datasets: [
          {
            label: "# of Tomatoes",
            data: [12, 19, 3, 5],
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        cutoutPercentage: 40,
        responsive: false
      }
    });
  }
}
