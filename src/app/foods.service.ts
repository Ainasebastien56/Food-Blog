import { Injectable } from '@angular/core';
import { Foods } from './foods';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  url = 'http://localhost:3000/foods';

  constructor() { }

  async getAllFoodCategories(): Promise<Foods[]>{
      const data = await fetch(this.url)
      return await data.json() ?? [];
  }
}
