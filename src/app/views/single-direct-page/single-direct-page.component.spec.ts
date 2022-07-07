import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDirectPageComponent } from './single-direct-page.component';

describe('SingleDirectPageComponent', () => {
  let component: SingleDirectPageComponent;
  let fixture: ComponentFixture<SingleDirectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleDirectPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDirectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
