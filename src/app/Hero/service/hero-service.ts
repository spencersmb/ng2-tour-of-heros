import {HEROES} from "../mock/mock-heroes";
import {IHero} from "../hero-model";

export class HeroService{

    constructor(){

    }
    getHeroes(): Promise<IHero[]>{
        return Promise.resolve(HEROES);
    }
    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<IHero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }
}