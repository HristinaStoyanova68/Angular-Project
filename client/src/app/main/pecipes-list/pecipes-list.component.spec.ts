import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecipesListComponent } from './pecipes-list.component';

describe('PecipesListComponent', () => {
  let component: PecipesListComponent;
  let fixture: ComponentFixture<PecipesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PecipesListComponent]
    });
    fixture = TestBed.createComponent(PecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
