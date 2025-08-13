import { Component, Input } from '@angular/core';
import { Foods } from '../foods';

@Component({
  selector: 'app-food-article',
  templateUrl: './food-article.component.html',
  styleUrls: ['./food-article.component.css']
})
export class FoodArticleComponent {
  @Input() foodArticle!: Foods;
}
