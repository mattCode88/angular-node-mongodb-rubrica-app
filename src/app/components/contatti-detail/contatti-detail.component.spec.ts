import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattiDetailComponent } from './contatti-detail.component';

describe('ContattiDetailComponent', () => {
  let component: ContattiDetailComponent;
  let fixture: ComponentFixture<ContattiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContattiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContattiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
