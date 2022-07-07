import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLoggedComponent } from './list-logged.component';

describe('ListLoggedComponent', () => {
  let component: ListLoggedComponent;
  let fixture: ComponentFixture<ListLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLoggedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
