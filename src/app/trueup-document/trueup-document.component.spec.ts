import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueupDocumentComponent } from './trueup-document.component';

describe('TrueupDocumentComponent', () => {
  let component: TrueupDocumentComponent;
  let fixture: ComponentFixture<TrueupDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrueupDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueupDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
