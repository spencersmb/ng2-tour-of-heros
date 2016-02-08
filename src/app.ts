import {bootstrap} from "angular2/platform/browser";
import {Component, OnInit} from "angular2/core";
import {IHero} from "./app/Hero/hero-model";
import {Hero} from "./app/Hero/hero-model";
import {HeroService} from "./app/Hero/service/hero-service";
import {HeroDetail} from "./app/Hero/component/hero-detail/hero-detail";

//interfaces must go above components here
interface IApp{
    title:string;
}
//root component to get up and running
@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1>' +
    '<h2>My Heroes</h2>' +
    '<ul class="heroes">'+
    '<li [class.selected]="hero === selectedHero" *ngFor="#hero of heroes" (click)="onSelect(hero)">' +
    '<span class="badge">{{hero.id}}</span>' +
    ' {{hero.name}}</li>' +
    '</ul>' +
    '<my-hero-detail [hero]="selectedHero"></my-hero-detail>',
    directives:[HeroDetail],
    styles:[
    `.selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 10em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0em;
        height: 1.6em;
        border-radius: 4px;
      }
      .heroes li.selected:hover {
        color: white;
      }
      .heroes li:hover {
        color: #607D8B;
        background-color: #EEE;
        left: .1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0em 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0px 0px 4px;
      }`
    ]
})

export class app implements IApp{
    title:string;
    public selectedHero: IHero;
    public heroes: IHero[];

    ngOnInit(){
        this.getHeroes();
    }

    constructor(
        private _heroService: HeroService
    ){
        this.title = 'Tour of Heroes';
    }
    onSelect(hero: IHero){
        this.selectedHero = hero;
        console.log(hero);
    }
    getHeroes(){
        this._heroService.getHeroesSlowly().then(data => this.heroes = data);

        //old syntax this would look like
        //.then( function(heroes{ return this.heroes = heroes}))
    }
}

bootstrap(app, [HeroService]);

