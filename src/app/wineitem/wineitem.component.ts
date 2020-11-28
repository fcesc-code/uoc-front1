import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-main',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.sass']
})
export class WineitemComponent implements OnInit {

  public wineTitle: string = '';
  public wineYear: number = 0;
  public wineGrapes: string = '';
  public wineCountry: string = '';
  public wineRegion: string = '';
  public wineDescription: string = '';
  public winePrice: number = 0;
  public wineImageUrl: string = '';
  public wineIsOnSale: boolean = true;
  public wineQuantityInChart: number = 0;

  constructor() { }

  ngOnInit() {
    this.wineTitle = 'Example Wine';
    this.wineYear = 2009;
    this.wineGrapes = 'Merlot';
    this.wineCountry = 'Italy';
    this.wineRegion = 'Lombardy';
    this.wineDescription = 'A taste from roman gods.';
    this.winePrice = 20.50;
    this.wineImageUrl = './assets/wine_example.png';
    this.wineIsOnSale = true;
    this.wineQuantityInChart = 0;
  }

  increaseAmount(): void {
    this.wineQuantityInChart++;
  }
  decreaseAmount(): void {
    if (this.wineQuantityInChart !== 0) this.wineQuantityInChart--;
  }

}
