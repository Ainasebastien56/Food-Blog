import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  contents=[
    {
      img:'assets/JaneDoe.jpg',
      name:'Jane Doe',
      description:`A professional chef with over a decade of experience
          in fine dining. Jane brings a wealth of knowledge and
          creativity to our recipes.`
    },
     {
      img:'assets/healthy.jpg',
      name:'Emily Jhonson',
      description:` With a background in nutrition, Emily focuses on creating
          healthy, balanced meals that cater to various dietary
          needs while being delicious.`
    },
     {
      img:'assets/food-blogger.jpg',
      name:'Jhon Smith',
      description:` A avid food blogger and photographer. Jhon captures
          the essence of food through his lens,
          making our dishes visualy appealing and inspiring.`
    },
  ];

  principles=[
    {
      title:'Integrity',
      paragraph:`We prioritize honesty and transparency our recipes,
              ensuring that our readers can trust the information we provide`
    },
     {
      title:'Community',
      paragraph:`Building a strong community is at the heart of Food Blog;
              we encourage interaction, sharing, and collaboration among our readers.`
    },
     {
      title:'Creativity',
      paragraph:`We celebrate innovation in cooking and welcome unique twists on
              traditional recipes, inspiring our audience to experiment in
              the kitchen.`
    },
       {
      title:'Sustainability',
      paragraph:`We are commited to promoting sustainable practices in the kitchen,
              emphasizing the use of local ingredients and minimizing food waste.`
    },
  ]
}
