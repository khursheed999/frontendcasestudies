import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartViewerComponent } from './chart-viewer.component';

describe('ChartViewerComponent', () => {
  let component: ChartViewerComponent;
  let fixture: ComponentFixture<ChartViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
