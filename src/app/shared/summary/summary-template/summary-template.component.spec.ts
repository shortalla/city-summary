import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTemplateComponent } from './summary-template.component';

describe('SummaryTemplateComponent', () => {
  let component: SummaryTemplateComponent;
  let fixture: ComponentFixture<SummaryTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
