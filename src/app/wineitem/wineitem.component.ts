import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-main',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.sass']
})
export class WineitemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  wineTitle: string = 'Example Wine';
  wineYear: number = 2009;
  wineGrapes: string = 'Merlot';
  wineCountry: string = 'Italy';
  wineRegion: string = 'Lombardy';
  wineDescription: string = 'A taste from roman gods.';
  winePrice: number = 20.50;
  wineImage: string = 'wine_example.png';

}
