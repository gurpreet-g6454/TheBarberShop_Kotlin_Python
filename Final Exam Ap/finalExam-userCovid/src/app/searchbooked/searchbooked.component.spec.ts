import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbookedComponent } from './searchbooked.component';

describe('SearchbookedComponent', () => {
  let component: SearchbookedComponent;
  let fixture: ComponentFixture<SearchbookedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbookedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
