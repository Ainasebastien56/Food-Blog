import { Injectable } from '@angular/core';
import { Foods } from './foods';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  url = 'https://blog-backend-beta-eight.vercel.app/api/foods';

  constructor() { }

  async getAllFoodCategories(): Promise<Foods[]>{
      const data = await fetch(this.url)
      return await data.json() ?? [];
  }
}
