import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable, Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes: number;
  counterSubstription: Subscription

  constructor() { 
    this.secondes = 0
  }

  ngOnInit(){
    const counter = Observable.interval(1000);
    this.counterSubstription = counter.subscribe((value: number) => {
      this.secondes = value
    },
    (error: any) => {
      console.log('Une erreur a été rencontrée !')
    },
    () => {
      console.log('Observable complétée');
    })
  }

  ngOnDestroy(){
    this.counterSubstription.unsubscribe();
  }
}
