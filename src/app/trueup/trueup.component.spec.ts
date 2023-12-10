import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueupComponent } from './trueup.component';

describe('TrueupComponent', () => {
  let component: TrueupComponent;
  let fixture: ComponentFixture<TrueupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrueupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
