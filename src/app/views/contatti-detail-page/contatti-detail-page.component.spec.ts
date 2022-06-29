import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattiDetailPageComponent } from './contatti-detail-page.component';

describe('ContattiDetailPageComponent', () => {
  let component: ContattiDetailPageComponent;
  let fixture: ComponentFixture<ContattiDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContattiDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContattiDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
