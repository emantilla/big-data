import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographicalAreaComponent } from './geographical-area.component';

describe('GeographicalAreaComponent', () => {
  let component: GeographicalAreaComponent;
  let fixture: ComponentFixture<GeographicalAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeographicalAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeographicalAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
