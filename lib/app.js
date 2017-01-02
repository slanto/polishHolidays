var polishHolidays = (function () {
    'use strict'
    var holidays = {},
        init = function (year) {
            if (isEmpty(holidays)) {
                loadHolidays(year);
            }
        },
        all = function (year) {
            init(year);
            return holidays;
        },
        easterSunday = function (year) {            
            return createEaster(year);
        },
        easterMonday = function (year) {
            return createEasterMonday(year);
        },
        newYear = function (year) {
            return createDate(year, 1, 1);
        },
        labourDay = function(year) {
            return createDate(year, 5, 1);
        },
        epiphany = function(year) {
            return createDate(year, 1, 6);
        },
        constitutionDay = function(year) {
            return createDate(year, 5, 3);
        },
        // 60 days after Easter Sunday
        corpusChristi = function(year) {            
            var easterDate = createEaster(year);
            var corpusChristDate = new Date(easterDate.setDate(easterDate.getDate() + 60));
            return new Date(Date.UTC(corpusChristDate.getFullYear(), corpusChristDate.getMonth(), corpusChristDate.getDate()));
        },
        assumptionOfBlessedVirginMary = function(year) {
            return createDate(year, 8, 15);
        },
        allSaintsDay = function(year) {
            return createDate(year, 11, 1);
        },
        nationalIndependenceDay = function(year) {
            return createDate(year, 11, 11);
        },
        christmasDay = function(year) {
            return createDate(year, 12, 25);
        },
        secondDayOfChristmas = function(year) {
            return createDate(year, 12, 26);
        },
        loadHolidays = function (year) {
            addHoliday(newYear(year), "New Year's Day");
            addHoliday(epiphany(year), "Epiphany");
            addHoliday(createEaster(year), "Easter Day");
            addHoliday(createEasterMonday(year), "Easter Monday");
            addHoliday(corpusChristi(year), "Corpus Christi");
            addHoliday(labourDay(year), "Labour Day");
            addHoliday(constitutionDay(year), "Constitution Day");
            addHoliday(assumptionOfBlessedVirginMary(year), "Assumption of the Blessed Virgin Mary");
            addHoliday(allSaintsDay(year), "All Saints\' Day");
            addHoliday(nationalIndependenceDay(year), "National Independence Day");
            addHoliday(christmasDay(year), "Christmas Day");
            addHoliday(secondDayOfChristmas(year), "Second Day of Christmas");
        },
        createEaster = function (year) {
            var easter = getEasterDate(year);
            return createDate(easter.year, easter.month, easter.day);
        },
        createEasterMonday = function (year) {
            var easter = getEasterDate(year);
            return createDate(easter.year, easter.month, easter.day + 1);
        },        
        addHoliday = function (date, description) {
            var holiday = {
                date: date,
                description: description
            };
            var month = date.getMonth(); //January is 0, February is 1, and so on.
            if (typeof holidays[month] === 'undefined') {
                holidays[month] = [];
            }

            holidays[month].push(holiday);
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
                return {
                    year: year,
                    month: month,
                    day: day
                };
            } else {
                throw new Error(`Invalid year ${year}`);
            }
        },
        createDate = function (year, month, day) {
            //JavaScript counts months from 0 to 11. January is 0. December is 11.
            return new Date(Date.UTC(year, month - 1, day));
        },
        isEmpty = function (obj) {     
            // because Object.keys(new Date()).length === 0;
            // we have to do some additional check
            return Object.keys(obj).length === 0 && obj.constructor === Object                    
        };
    return {
        all: all,
        easterSunday: easterSunday,
        newYear: newYear,
        easterMonday: easterMonday,
        corpusChristi: corpusChristi,
        labourDay: labourDay,
        epiphany: epiphany,
        constitutionDay: constitutionDay,
        assumptionOfBlessedVirginMary: assumptionOfBlessedVirginMary,
        allSaintsDay: allSaintsDay,
        nationalIndependenceDay: nationalIndependenceDay,
        christmasDay: christmasDay,
        secondDayOfChristmas: secondDayOfChristmas
    };
})();