import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private _activatedRouter: ActivatedRoute, private _heroesService: HeroesService) { 
    this._activatedRouter.params.subscribe( params => {
      console.log(params['id']);
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
  }

  ngOnInit(): void {
  }

}