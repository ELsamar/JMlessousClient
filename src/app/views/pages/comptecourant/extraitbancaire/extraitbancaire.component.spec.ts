import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraitbancaireComponent } from './extraitbancaire.component';

describe('ExtraitbancaireComponent', () => {
  let component: ExtraitbancaireComponent;
  let fixture: ComponentFixture<ExtraitbancaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraitbancaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraitbancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
