import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattiListComponent } from './contatti-list.component';

describe('ContattiListComponent', () => {
  let component: ContattiListComponent;
  let fixture: ComponentFixture<ContattiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContattiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContattiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
