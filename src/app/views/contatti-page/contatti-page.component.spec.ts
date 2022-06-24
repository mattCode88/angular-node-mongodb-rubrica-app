import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattiPageComponent } from './contatti-page.component';

describe('ContattiPageComponent', () => {
  let component: ContattiPageComponent;
  let fixture: ComponentFixture<ContattiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContattiPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContattiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
