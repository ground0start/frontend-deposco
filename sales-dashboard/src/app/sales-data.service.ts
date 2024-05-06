import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class SalesDataService {

  private baseUrl = 'http://localhost:8090/api/sales'; 

  constructor(private http: HttpClient) { }

  getTotalSalesAmount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/total/amount`);
  }

  getTotalSalesQuantity(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/total/quantity`);
  }

  getBestSellingProductsByQuantity(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/bestselling/quantity`);
  }

  getBestSellingProductsByAmount(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/bestselling/amount`);
  }

  getMonthlySalesTrends(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/trends`);
  }
}