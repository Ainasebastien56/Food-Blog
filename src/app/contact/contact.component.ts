import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  openedIndex: number | null = null;

  faqs = [
    {
    question: 'What types of recipes do you offer?',
    answer: `We offer a diverse range of recipes that cater to various
              dietary preferences and occasions. From quick weeknight dinners
               to elaborate holiday feasts, our collection includes vegetarian,
               vegan, gluten-free, and traditional options to satisfy every palate.`
  },
  {
    question: 'How do I submit a recipe?',
    answer: `We love hearing from our readers! You can submit your original recipes through our contact form.
             Please include details about the dish, ingredients, and cooking instructions.
             We may feature your creation on our blog with proper credit.`
  },
  {
    question: 'Can I use your recipes for commercial purpose?',
    answer: `
            Our recipes are intended for personal use and enjoyment.
            If you wish to use our recipes in a commercial setting,
            please reach out to us for permission and discuss potential licensing options.
            `
  }
];

  toggle(index: number) {
  this.openedIndex = this.openedIndex === index ? null : index;
}
}
