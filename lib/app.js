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