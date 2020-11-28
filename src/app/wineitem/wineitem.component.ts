import { Component, OnInit } from '@angular/core';
import { IWineItem, IFoodItem } from './items.interfaces';

@Component({
  selector: 'app-products-main',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.sass']
})
export class WineitemComponent implements OnInit {

  wineSingleMockData = {
    title : 'Example Wine',
    year : 2009,
    grapes : 'Merlot',
    country : 'Italy',
    region : 'Lombardy',
    description : 'A taste from roman gods.',
    price : 20.50,
    imageUrl : './assets/wine_example.png',
    isOnSale : true,
    quantityInChart : 0
  };

  foodSingleMockData = {
    name: 'Manchego cheese',
    kcal: 320,
    vegan: false,
    gluten: false
  }

  public wine: IWineItem = this.wineSingleMockData;
  public food: IFoodItem = this.foodSingleMockData;

  constructor() { }

  ngOnInit() {
  }

  increaseAmount(): void {
    this.wine.quantityInChart++;
  }
  decreaseAmount(): void {
    if (this.wine.quantityInChart !== 0) this.wine.quantityInChart--;
  }

}
