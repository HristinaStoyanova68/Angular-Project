import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastArrivalsComponent } from './last-arrivals.component';

describe('LastArrivalsComponent', () => {
  let component: LastArrivalsComponent;
  let fixture: ComponentFixture<LastArrivalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastArrivalsComponent]
    });
    fixture = TestBed.createComponent(LastArrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
