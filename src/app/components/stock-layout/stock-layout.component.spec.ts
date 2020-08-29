import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockLayoutComponent } from './stock-layout.component';

describe('StockLayoutComponent', () => {
  let component: StockLayoutComponent;
  let fixture: ComponentFixture<StockLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
