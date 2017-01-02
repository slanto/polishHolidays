describe('first sample test', function () {
    it('should be true', function () {
        expect('bar').toBe('bar');
    });
    it('DateTime.getDate() returns day as a number', function () {
        var date = new Date('27 Jan 2017');
        expect(date.getDate()).toEqual(27);
    });
    it('DateTime.setDate() sets new day in date', function () {
        var date = new Date('27 Jan 2017');
        var nextDay = new Date(date.setDate(date.getDate() + 1));
        expect(nextDay.getDate()).toEqual(28);
    });
    it('should be true', function () {
        expect('bar').toBe('bar');
    });
});

describe('PolishHolidays', function () {
    it('should be defined', function () {
        expect(polishHolidays).toBeDefined();
    });
    it('polishHolidays.easterSunday() should be defined', function () {
        expect(polishHolidays.easterSunday(2017)).toBeDefined();
    });
    it('polishHolidays.easterSunday(2017) should return easter date', function () {
        expect(polishHolidays.easterSunday(2017)).toEqual(new Date(Date.UTC(2017, 3, 16)));
    });
    it('polishHolidays.easterMonday() should be defined', function () {
        expect(polishHolidays.easterMonday(2017)).toBeDefined();
    });
    it('polishHolidays.easterMonday(2017) should return easter date', function () {
        expect(polishHolidays.easterMonday(2017)).toEqual(new Date(Date.UTC(2017, 3, 17)));
    });
    it('polishHolidays.easterSunday(2006) should return easter date', function () {
        expect(polishHolidays.easterSunday(2006)).toEqual(new Date(Date.UTC(2006, 3, 16)));
    });
    it('polishHolidays.corpusChristi(2017) should be defined', function () {
        expect(polishHolidays.corpusChristi(2017)).toBeDefined();
    });
    it('polishHolidays.corpusChristi(2017) should return Corpus Chrisit date', function () {
        expect(polishHolidays.corpusChristi(2017)).toEqual(new Date(Date.UTC(2017, 5, 15)));
    });
    it('polishHolidays.corpusChristi(1980) should return Corpus Chrisit date', function () {
        expect(polishHolidays.corpusChristi(1980)).toEqual(new Date(Date.UTC(1980, 5, 5)));
    });
    it('polishHolidays.easterSunday(-1) should return invalid year exception', function () {
        expect(function () { polishHolidays.easterSunday(-1) }).toThrow(new Error("Invalid year -1"));
    });
    it('polishHolidays.all(2017) should be defined', function () {
        expect(polishHolidays.all(2017)).toBeDefined();
    });
    it('polishHolidays.all(2017) should return all holidays', function () {
        expect(polishHolidays.all(2017)).toEqual({
            0: [
                { date: new Date(Date.UTC(2017, 0, 1)), description: 'New Year\'s Day' },
                { date: new Date(Date.UTC(2017, 0, 6)), description: 'Epiphany' }
            ],
            3: [
                { date: new Date(Date.UTC(2017, 3, 16)), description: 'Easter Day' },
                { date: new Date(Date.UTC(2017, 3, 17)), description: 'Easter Monday' }
            ],
            4: [
                { date: new Date(Date.UTC(2017, 4, 1)), description: 'Labour Day' },
                { date: new Date(Date.UTC(2017, 4, 3)), description: 'Constitution Day' }
            ],
            5: [
                { date: new Date(Date.UTC(2017, 5, 15)), description: 'Corpus Christi' },
            ],
            7: [
                { date: new Date(Date.UTC(2017, 7, 15)), description: 'Assumption of the Blessed Virgin Mary' }
            ],
            10: [
                { date: new Date(Date.UTC(2017, 10, 1)), description: 'All Saints\' Day' },
                { date: new Date(Date.UTC(2017, 10, 11)), description: 'National Independence Day' }
            ],
            11: [
                { date: new Date(Date.UTC(2017, 11, 25)), description: 'Christmas Day' },
                { date: new Date(Date.UTC(2017, 11, 26)), description: 'Second Day of Christmas' }
            ]
        });
    });
});