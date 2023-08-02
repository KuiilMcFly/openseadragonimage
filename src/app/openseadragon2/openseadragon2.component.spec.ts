import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Openseadragon2Component } from './openseadragon2.component';

describe('Openseadragon2Component', () => {
  let component: Openseadragon2Component;
  let fixture: ComponentFixture<Openseadragon2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Openseadragon2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Openseadragon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
