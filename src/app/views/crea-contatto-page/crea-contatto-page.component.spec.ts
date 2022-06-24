import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaContattoPageComponent } from './crea-contatto-page.component';

describe('CreaContattoPageComponent', () => {
  let component: CreaContattoPageComponent;
  let fixture: ComponentFixture<CreaContattoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaContattoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaContattoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
