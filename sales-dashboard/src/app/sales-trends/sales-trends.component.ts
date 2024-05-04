import { Component, OnInit } from '@angular/core';
import { SalesDataService } from '../sales-data.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-sales-trends',
  templateUrl: './sales-trends.component.html',
  styleUrls: ['./sales-trends.component.css'],
  standalone: true,
  imports: [NgxChartsModule]
})
export class SalesTrendsComponent implements OnInit {
  multi: any[] = []; // This will hold the chart data

  // Chart options
  view: [number, number] = [700, 300]; // Width and height of the chart
  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Month';
  yAxisLabel: string = 'Sales';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private salesDataService: SalesDataService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.salesDataService.getMonthlySalesTrends().subscribe(data => {
      this.multi = [{
        name: 'Sales',
        series: data.map(item => ({
          name: item.Month,
          value: item.TotalSaleAmount
        }))
      }];
    });
  }
}