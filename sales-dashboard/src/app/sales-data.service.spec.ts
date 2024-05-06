import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SalesDataService } from './sales-data.service';

describe('SalesDataService', () => {
  let service: SalesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SalesDataService]
    });
    service = TestBed.inject(SalesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
