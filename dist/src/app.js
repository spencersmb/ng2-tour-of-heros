var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var browser_1 = require("angular2/platform/browser");
var core_1 = require("angular2/core");
var hero_service_1 = require("./app/Hero/service/hero-service");
var hero_detail_1 = require("./app/Hero/component/hero-detail/hero-detail");
//root component to get up and running
var app = (function () {
    function app(_heroService) {
        this._heroService = _heroService;
        this.title = 'Tour of Heroes';
    }
    app.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    app.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        console.log(hero);
    };
    app.prototype.getHeroes = function () {
        var _this = this;
        this._heroService.getHeroesSlowly().then(function (data) { return _this.heroes = data; });
        //old syntax this would look like
        //.then( function(heroes{ return this.heroes = heroes}))
    };
    app = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>{{title}}</h1>' +
                '<h2>My Heroes</h2>' +
                '<ul class="heroes">' +
                '<li [class.selected]="hero === selectedHero" *ngFor="#hero of heroes" (click)="onSelect(hero)">' +
                '<span class="badge">{{hero.id}}</span>' +
                ' {{hero.name}}</li>' +
                '</ul>' +
                '<my-hero-detail [hero]="selectedHero"></my-hero-detail>',
            directives: [hero_detail_1.HeroDetail],
            styles: [
                ".selected {\n        background-color: #CFD8DC !important;\n        color: white;\n      }\n      .heroes {\n        margin: 0 0 2em 0;\n        list-style-type: none;\n        padding: 0;\n        width: 10em;\n      }\n      .heroes li {\n        cursor: pointer;\n        position: relative;\n        left: 0;\n        background-color: #EEE;\n        margin: .5em;\n        padding: .3em 0em;\n        height: 1.6em;\n        border-radius: 4px;\n      }\n      .heroes li.selected:hover {\n        color: white;\n      }\n      .heroes li:hover {\n        color: #607D8B;\n        background-color: #EEE;\n        left: .1em;\n      }\n      .heroes .text {\n        position: relative;\n        top: -3px;\n      }\n      .heroes .badge {\n        display: inline-block;\n        font-size: small;\n        color: white;\n        padding: 0.8em 0.7em 0em 0.7em;\n        background-color: #607D8B;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -4px;\n        height: 1.8em;\n        margin-right: .8em;\n        border-radius: 4px 0px 0px 4px;\n      }"
            ]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], app);
    return app;
})();
exports.app = app;
browser_1.bootstrap(app, [hero_service_1.HeroService]);
