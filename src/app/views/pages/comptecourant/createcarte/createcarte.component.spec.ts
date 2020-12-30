import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecarteComponent } from './createcarte.component';

describe('CreatecarteComponent', () => {
  let component: CreatecarteComponent;
  let fixture: ComponentFixture<CreatecarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
