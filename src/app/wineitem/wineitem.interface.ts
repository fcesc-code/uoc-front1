export interface IWineItem {
  wineTitle: string;
  wineYear: number;
  wineGrapes: string;
  wineCountry: string;
  wineRegion: string;
  wineDescription: string;
  winePrice: number;
  wineImageUrl: string;
  wineIsOnSale: boolean;
  wineQuantityInChart: number;
}

export interface IFoodItem {
  name: string;
  kcal: number;
  vegan: boolean;
  gluten: boolean;
}