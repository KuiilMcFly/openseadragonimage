import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Openseadragon1Component } from './openseadragon1.component';

describe('Openseadragon1Component', () => {
  let component: Openseadragon1Component;
  let fixture: ComponentFixture<Openseadragon1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Openseadragon1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Openseadragon1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
