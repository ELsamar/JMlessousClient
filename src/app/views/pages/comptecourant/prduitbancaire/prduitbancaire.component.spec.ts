import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrduitbancaireComponent } from './prduitbancaire.component';

describe('PrduitbancaireComponent', () => {
  let component: PrduitbancaireComponent;
  let fixture: ComponentFixture<PrduitbancaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrduitbancaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrduitbancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
