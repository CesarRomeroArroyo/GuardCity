import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesSeguimientoComponent } from './reportes-seguimiento.component';

describe('ReportesSeguimientoComponent', () => {
  let component: ReportesSeguimientoComponent;
  let fixture: ComponentFixture<ReportesSeguimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesSeguimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
