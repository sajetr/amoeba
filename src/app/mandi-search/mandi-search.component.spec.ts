import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandiSearchComponent } from './mandi-search.component';

describe('MandiSearchComponent', () => {
  let component: MandiSearchComponent;
  let fixture: ComponentFixture<MandiSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandiSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
