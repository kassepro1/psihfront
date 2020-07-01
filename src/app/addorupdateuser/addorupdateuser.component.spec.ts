import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorupdateuserComponent } from './addorupdateuser.component';

describe('AddorupdateuserComponent', () => {
  let component: AddorupdateuserComponent;
  let fixture: ComponentFixture<AddorupdateuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddorupdateuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddorupdateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
