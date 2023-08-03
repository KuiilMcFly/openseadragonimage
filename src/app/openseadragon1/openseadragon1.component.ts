import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import * as OpenSeadragon from 'openseadragon';
@Component({
  selector: 'app-openseadragon1',
  templateUrl: './openseadragon1.component.html',
  styleUrls: ['./openseadragon1.component.scss']
})
export class Openseadragon1Component implements OnInit {

  viewer = this.ngZone.runOutsideAngular(() =>
  OpenSeadragon(Option)
);
  constructor(private ngZone: NgZone) { }

  ngOnInit() {
  }

}
