import { Component, OnInit } from '@angular/core';
import { SalesDataService } from '../sales-data.service';
import { NgxChartsModule, Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrls: ['./sales-dashboard.component.css'],
  standalone: true,
  imports: [NgxChartsModule]
})
export class SalesDashboardComponent implements OnInit {
  salesData: any[] = [];
  quantityData: any[] = [];
  multi: any[] = []; // Data for trends
  view: [number, number] = [1500, 800]; // Chart dimensions
  legend: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Month';
  yAxisLabel: string = 'Sales - unit: $';
  timeline: boolean = true;

  // Shared chart options
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#ff7f0e', '#1f77b4', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf', '#66c2a5']
  };

  constructor(private salesDataService: SalesDataService) {}

  ngOnInit(): void {
    this.fetchSalesData();
    this.fetchQuantityData();
    this.fetchTrendsData();
  }

  // For Sale Amount Pie Chart
  fetchSalesData(): void {
    this.salesDataService.getTotalSalesAmount().subscribe(totalSales => {
      this.salesDataService.getBestSellingProductsByAmount().subscribe(products => {
        const sortedData = products.sort((a, b) => b.TotalSaleAmount - a.TotalSaleAmount);
        const topItems = sortedData.slice(0, 10);
        const othersTotal = sortedData.slice(10).reduce((sum, item) => sum + item.TotalSaleAmount, 0);

        this.salesData = topItems.map(item => ({
          name: `${item.ItemDescription} (${((item.TotalSaleAmount / totalSales) * 100).toFixed(2)}%)`,
          value: item.TotalSaleAmount
        }));

        if (othersTotal > 0) {
          this.salesData.push({
            name: `Others (${((othersTotal / totalSales) * 100).toFixed(2)}%)`,
            value: othersTotal
          });
        }
      });
    });
  }

  // For Sale Quantity Pie Chart
  fetchQuantityData(): void {
    this.salesDataService.getTotalSalesQuantity().subscribe(totalQuantity => {
      this.salesDataService.getBestSellingProductsByQuantity().subscribe(products => {
        const sortedData = products.sort((a, b) => b.Quantity - a.Quantity);
        const topItems = sortedData.slice(0, 10);
        const othersTotal = sortedData.slice(10).reduce((sum, item) => sum + item.Quantity, 0);
  
        this.quantityData = topItems.map(item => ({
          name: `${item.ItemDescription} (${((item.Quantity / totalQuantity) * 100).toFixed(2)}%)`,
          value: item.Quantity
        }));
  
        if (othersTotal > 0) {
          this.quantityData.push({
            name: `Others (${((othersTotal / totalQuantity) * 100).toFixed(2)}%)`,
            value: othersTotal
          });
        }
      });
    });
  }

  // For monthly trend chart
  fetchTrendsData(): void {
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