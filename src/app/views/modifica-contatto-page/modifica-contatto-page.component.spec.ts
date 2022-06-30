import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaContattoPageComponent } from './modifica-contatto-page.component';

describe('ModificaContattoPageComponent', () => {
  let component: ModificaContattoPageComponent;
  let fixture: ComponentFixture<ModificaContattoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaContattoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaContattoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
