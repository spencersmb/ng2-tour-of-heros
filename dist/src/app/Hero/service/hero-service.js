var mock_heroes_1 = require("../mock/mock-heroes");
var HeroService = (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeroes = function () {
        return Promise.resolve(mock_heroes_1.HEROES);
    };
    // See the "Take it slow" appendix
    HeroService.prototype.getHeroesSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(mock_heroes_1.HEROES); }, 2000);
        } // 2 seconds
         // 2 seconds
        );
    };
    return HeroService;
})();
exports.HeroService = HeroService;
