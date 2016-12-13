var polishHolidays = (function () {
        var all = function (year) {
            return [{ day: 16, month: 4, year: 2017, description: "Easter" }, { day: 1, month: 1, year: 2017, description: "New Year" }];
        },
        easterSunday = function (year) {
            return { day: 16, month: 4, year: 2017, description: "Easter" }
        },
        newYear = function (year) {
            return { day: 1, month: 1, year: 2017, description: "New Year" }
        };
    return {
        all: all,
        easterSunday: easterSunday,
        newYear: newYear
    };
})();

(function () {
    'use strict'
    var easter = polishHolidays.easterSunday(2017);
    var newYear = polishHolidays.newYear(2017);
    var all = polishHolidays.all(2017); //-> holidays[{day: 1, month: 1, year: 2017, description: "dsada"},{day: 6, month: 1, year: 2017, description: "sdasdas"}]
})();