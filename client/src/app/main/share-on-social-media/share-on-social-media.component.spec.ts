import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareOnSocialMediaComponent } from './share-on-social-media.component';

describe('ShareOnSocialMediaComponent', () => {
  let component: ShareOnSocialMediaComponent;
  let fixture: ComponentFixture<ShareOnSocialMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareOnSocialMediaComponent]
    });
    fixture = TestBed.createComponent(ShareOnSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
