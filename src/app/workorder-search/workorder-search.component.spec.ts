import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkorderSearchComponent } from './workorder-search.component';

describe('WorkorderSearchComponent', () => {
  let component: WorkorderSearchComponent;
  let fixture: ComponentFixture<WorkorderSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkorderSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkorderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
