import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHoldersComponent } from './product-holders.component';

describe('ProductHoldersComponent', () => {
  let component: ProductHoldersComponent;
  let fixture: ComponentFixture<ProductHoldersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHoldersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
