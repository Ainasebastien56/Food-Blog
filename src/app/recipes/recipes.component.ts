import { Component, inject } from '@angular/core';
import { Foods } from '../foods';
import { FoodsService } from '../foods.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
foods: Foods[] = [];
  filteredFoods: Foods[] = [];
  foodServices : FoodsService = inject(FoodsService);
  actualCategory: string = 'all categories';

    contents=[
    {
      img:'assets/pie.jpg',
      name:"Grandma's Secret Pie",
      description:`This beloved recipe has been passed down through generations,
           featuring a flaky crust and a rich filling that brings back fond memories.
            A true family favorite that anyone can master.`,
      btn:'View Recipe'
    },
     {
      img:'assets/vegan-tacos.jpg',
      name:'Spicy Vegan Tacos',
      description:`
      A vibrant and flavorful dish that showcases a mix of spices
      and fresh vegetables. These tacos are not only delicious but also a healthy option
      for those looking to explore plant-based meals.`,
      btn:'Read More'
    },
     {
      img:'assets/cookies.jpg',
      name:'Chocolate Chip Cookies',
      description:` These classic cookies are soft, chewy, and packed
                    with chocolate chips, making them a perfect treat for any occasion.
                   A recipe shared by one of our readers that’s sure to please everyone.`,
      btn:'See Recipe'
    },
  ];

  constructor(){
    this.foodServices.getAllFoodCategories().then((foods : Foods[])=>{
      this.foods = foods;
      this.filteredFoods = this.foods;
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
