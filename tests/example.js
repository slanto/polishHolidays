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
            ]
        });
    });
});