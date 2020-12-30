import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptecourantdetailsComponent } from './comptecourantdetails.component';

describe('ComptecourantdetailsComponent', () => {
  let component: ComptecourantdetailsComponent;
  let fixture: ComponentFixture<ComptecourantdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptecourantdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptecourantdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
