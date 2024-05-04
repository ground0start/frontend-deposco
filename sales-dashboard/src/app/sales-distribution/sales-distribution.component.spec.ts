import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDistributionComponent } from './sales-distribution.component';

describe('SalesDistributionComponent', () => {
  let component: SalesDistributionComponent;
  let fixture: ComponentFixture<SalesDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesDistributionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
