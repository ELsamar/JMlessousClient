import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetchequeCreateComponent } from './carnetcheque-create.component';

describe('CarnetchequeCreateComponent', () => {
  let component: CarnetchequeCreateComponent;
  let fixture: ComponentFixture<CarnetchequeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarnetchequeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnetchequeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
