import {Component, View, Input} from "angular2/core";

@Component({
    selector: 'my-hero-detail'
})
@View({
    templateUrl:'app/hero/component/hero-detail/hero-detail-tmpl.html'
})

export class HeroDetail{
    //Note: we are passing the selected heroes data to this component through the input [hero] set on the template selector in app.ts.
    @Input() hero;
    constructor(){

    }
}