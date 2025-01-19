import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorDetailComponent } from './director-detail.component';

describe('DirectorDetailComponent', () => {
  let component: DirectorDetailComponent;
  let fixture: ComponentFixture<DirectorDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectorDetailComponent]
    });
    fixture = TestBed.createComponent(DirectorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
