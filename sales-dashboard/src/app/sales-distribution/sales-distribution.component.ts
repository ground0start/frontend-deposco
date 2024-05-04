import { Component, OnInit } from '@angular/core';
import { SalesDataService } from '../sales-data.service';

@Component({
  selector: 'app-sales-distribution',
  templateUrl: './sales-distribution.component.html',
  styleUrls: ['./sales-distribution.component.css']
})
export class SalesDistributionComponent implements OnInit {
  results: any[] = []; // Initialized as an empty array

  constructor(private salesDataService: SalesDataService) { }

  ngOnInit(): void {
    this.salesDataService.getBestSellingProductsByAmount().subscribe(data => {
      this.results = data; // Transform this data as needed for the chart
    });
  }
}