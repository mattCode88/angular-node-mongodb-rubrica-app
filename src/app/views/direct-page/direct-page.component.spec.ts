import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectPageComponent } from './direct-page.component';

describe('DirectPageComponent', () => {
  let component: DirectPageComponent;
  let fixture: ComponentFixture<DirectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
