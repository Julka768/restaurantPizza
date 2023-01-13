import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss'],
})
export class PizzaComponent implements OnInit {
  @Input('pizzaName') pizzaName!: string;
  @Input('toppings') toppings!: string;
  @Input('priceMini') priceMini!: number;
  @Input('priceBig') priceBig!: number;
  impagePath: string =
    'https://cdn.galleries.smcloud.net/t/galleries/gf-cgdk-p5yy-aE4f_pizza-pepperoni-z-jalapeno-to-jadl-joe-biden-z-zolnierzami-w-rzeszowie-1920x1080-nocrop.jpg?fbclid=IwAR36IkSru5NoWPpknqrJcJXG0-LeHzRLcYVy7f733EkTUhTvXMHz1eHswlM ';

  constructor() {}

  ngOnInit() {}
}
