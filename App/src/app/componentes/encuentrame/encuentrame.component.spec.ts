import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuentrameComponent } from './encuentrame.component';

describe('EncuentrameComponent', () => {
  let component: EncuentrameComponent;
  let fixture: ComponentFixture<EncuentrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuentrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuentrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
