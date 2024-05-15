import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaInventarioComponent } from './vista-inventario.component';

describe('VistaInventarioComponent', () => {
  let component: VistaInventarioComponent;
  let fixture: ComponentFixture<VistaInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaInventarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
