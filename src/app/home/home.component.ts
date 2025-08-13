import { Component, inject} from '@angular/core';
import { Foods } from '../foods';
import { FoodsService } from '../foods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: Foods[] = [];
  filteredFoods: Foods[] = [];
  foodServices : FoodsService = inject(FoodsService);
  actualCategory: string = 'all categories'
  contentsSlide =[
    {
      img:'/assets/image_1.jpg',
      title:'Culinary Adventures',
      paragraph:`Dive into our curated collection of recipes
            that celebrate diverse cuisines from around
            the world. Each recupe is crafted with care,
            ensuring a delightful experience for your palate`,
      btn:'Discover More'
    },
    {
      img:'/assets/image photographe.jpg',
      title:'Food Photography',
      paragraph:`  Explore the art of food photography with our guides designed to help you capture
            stunning images of your dishes. Transform your food
            into visual masterpieces for social media or personal keepsakes.`,
      btn:' See Tips'
    },
    {
      img:'/assets/chef.jpg',
      title:'Expert Tips',
      paragraph:` Learn from our top chefs as they share best-kept secrets in the kitchen.
            From cooking techniques to ingredient substitutions,
            elevate your culinary skills with our expert advice.`,
      btn:'Learn More'
    },

  ]
  constructor(){
    this.foodServices.getAllFoodCategories().then((foods : Foods[])=>{
      this.foods = foods;
      this.filteredFoods = this.foods;
      console.log(this.filteredFoods);
    })
  }
  getCategory(category:string){
    this.actualCategory = category.toLowerCase()

    if (category.includes('all')){
      this.filteredFoods = this.foods;
    }

    else{
    this.filteredFoods = this.foods.filter(food =>
       food.category.toLowerCase().includes(category.toLowerCase()))

    console.log(this.filteredFoods)
    }
  }

}
