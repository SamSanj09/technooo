import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaInicial1Component } from './vista-inicial1.component';

describe('VistaInicial1Component', () => {
  let component: VistaInicial1Component;
  let fixture: ComponentFixture<VistaInicial1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaInicial1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaInicial1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
