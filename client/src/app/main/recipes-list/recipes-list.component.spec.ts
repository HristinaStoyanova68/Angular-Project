import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesListComponent as RecipesListComponent } from './recipes-list.component';

describe('PecipesListComponent', () => {
  let component: RecipesListComponent;
  let fixture: ComponentFixture<RecipesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesListComponent]
    });
    fixture = TestBed.createComponent(RecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
