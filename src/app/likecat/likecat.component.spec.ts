import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeCatComponent } from './likecat.component';

describe('LikeCatComponent', () => {
  let component: LikeCatComponent;
  let fixture: ComponentFixture<LikeCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
