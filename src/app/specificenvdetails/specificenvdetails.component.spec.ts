import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificenvdetailsComponent } from './specificenvdetails.component';

describe('SpecificenvdetailsComponent', () => {
  let component: SpecificenvdetailsComponent;
  let fixture: ComponentFixture<SpecificenvdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificenvdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificenvdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
