import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericSearchListLibComponent } from './generic-search-list-lib.component';

describe('GenericSearchListLibComponent', () => {
  let component: GenericSearchListLibComponent;
  let fixture: ComponentFixture<GenericSearchListLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericSearchListLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericSearchListLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
