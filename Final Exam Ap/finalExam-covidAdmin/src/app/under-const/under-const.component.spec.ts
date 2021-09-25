import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderConstComponent } from './under-const.component';

describe('UnderConstComponent', () => {
  let component: UnderConstComponent;
  let fixture: ComponentFixture<UnderConstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderConstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderConstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
