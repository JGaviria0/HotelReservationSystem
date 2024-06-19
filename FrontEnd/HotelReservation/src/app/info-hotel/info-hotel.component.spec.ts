import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHotelComponent } from './info-hotel.component';

describe('InfoHotelComponent', () => {
  let component: InfoHotelComponent;
  let fixture: ComponentFixture<InfoHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoHotelComponent]
    });
    fixture = TestBed.createComponent(InfoHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
