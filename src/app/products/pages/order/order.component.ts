import { Component } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { Hero, Color } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean =false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [{
    name: 'Superman',
    canFly: true,
    color: Color.blue
  },
  {
    name: 'Batman',
    canFly: false,
    color: Color.black
  },
  {
    name: 'Spiderman',
    canFly: false,
    color: Color.red
  },
  {
    name: 'Hulk',
    canFly: true,
    color: Color.green
  }
]


  toggleUpperCase() : void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero ){
    this.orderBy = value;
  }
}
