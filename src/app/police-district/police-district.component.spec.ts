import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceDistrictComponent } from './police-district.component';

describe('PoliceDistrictComponent', () => {
  let component: PoliceDistrictComponent;
  let fixture: ComponentFixture<PoliceDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliceDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
