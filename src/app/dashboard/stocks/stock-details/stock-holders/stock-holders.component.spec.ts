import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockHoldersComponent } from './stock-holders.component';

describe('StockHoldersComponent', () => {
  let component: StockHoldersComponent;
  let fixture: ComponentFixture<StockHoldersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockHoldersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockHoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
