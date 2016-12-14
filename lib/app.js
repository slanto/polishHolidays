var polishHolidays = (function () {
    var all = function (year) {
        return [{ day: 16, month: 4, year: 2017, description: "Easter" }, { day: 1, month: 1, year: 2017, description: "New Year" }];
    },
        easterSunday = function (year) {
            return getEasterDate(year);
        },
        newYear = function (year) {
            return { day: 1, month: 1, year: year, description: "New Year" }
        },
        getEasterDate = function (year) {
            if (year > 0) {
                //Meeusa/Jonesa/Butchera method https://pl.wikipedia.org/wiki/Wielkanoc
                var a = year % 19;
                var b = Math.floor(year / 100);
                var c = year % 100;
                var d = Math.floor(b / 4);
                var e = b % 4;
                var f = Math.floor((b + 8) / 25);
                var g = Math.floor((b - f + 1) / 3);
                var h = (19 * a + b - d - g + 15) % 30;
                var i = Math.floor(c / 4);
                var k = c % 4;
                var l = (32 + 2 * e + 2 * i - h - k) % 7;
                var m = Math.floor((a + 11 * h + 22 * l) / 451);
                var p = (h + l - 7 * m + 114) % 31;
                var day = p + 1;
                var month = Math.floor((h + l - 7 * m + 114) / 31);
                return { day: day, month: month, year: year, description: 'Easter' }
            } else {
                throw new Error("Invalid year");
            }
        };
    return {
        all: all,
        easterSunday: easterSunday,
        newYear: newYear
    };
})();