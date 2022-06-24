import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattiFormComponent } from './contatti-form.component';

describe('ContattiFormComponent', () => {
  let component: ContattiFormComponent;
  let fixture: ComponentFixture<ContattiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContattiFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContattiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
