import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueupPipelineComponent } from './trueup-pipeline.component';

describe('TrueupPipelineComponent', () => {
  let component: TrueupPipelineComponent;
  let fixture: ComponentFixture<TrueupPipelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrueupPipelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueupPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
