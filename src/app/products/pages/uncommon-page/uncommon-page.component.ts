import { Component } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'path';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient(): void{
    this.name = 'Melisa';
    this.gender = 'female'
  }

  //i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Ferando','Mario', 'Luis', 'Melissa', 'Brenda']
  public clientsMap = {
    '=0' : 'no tenemos ningún cliente esperando',
    '=1' : 'tenemos un cliente esperando',
    '=2' : 'tenemos 2 clientes esperando',
    'other' : 'tenemos # clientes esperando.',
  }

  deleteClient() :void{
    this.clients.shift();
  }

  //KeyValue Pipe

  public person = {
    name: 'Fernando',
    age: 34,
    address: 'Ottawa, Canada'
  }


  //Async pipe

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa.');
      this.person.name = 'Otro Nombre'
    }, 3500);
  })

}
