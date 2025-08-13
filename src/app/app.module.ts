import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FoodArticleComponent } from './food-article/food-article.component';
import { register } from 'swiper/element/bundle';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { RecipesComponent } from './recipes/recipes.component';

// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodArticleComponent,
    AboutComponent,
    ContactComponent,
    ThemeToggleComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
