describe('first sample test', function() {
  it('should be true', function() {
    expect('bar').toBe('bar');
  });
});

describe('PolishHolidays', function(){
    it('should be defined', function() {
        expect(polishHolidays).toBeDefined();
    });
    it('polishHolidays.easterSunday() should be defined', function() {
        expect(polishHolidays.easterSunday(2017)).toBeDefined();
    });
    it('polishHolidays.easterSunday(2017) should return easter date', function() {
        expect(polishHolidays.easterSunday(2017)).toEqual(new Date('Sun Apr 16 2017'));
    });    
    it('polishHolidays.easterSunday(2016) should return easter date', function() {
        expect(polishHolidays.easterSunday(2016)).toEqual(new Date('Sun Mar 27 2016'));
    }); 
    // it('polishHolidays.easterSunday(-1) should return invalid year exception', function() {
    //     expect(polishHolidays.easterSunday(-1)).toThrow();
    // });
    it('polishHolidays.all(2017) should be defined', function() {
        expect(polishHolidays.all(2017)).toBeDefined();
    });
    it('polishHolidays.all(2017) should return all holidays', function() {
        //expect(polishHolidays.all(2017)).toEqual({ 0: [{ date: new Date('Sun Jan 01 2017'), description: 'New Year\'s Day'}], 3: [{date: new Date('Sun Apr 16 2017'), description: 'Easter Day'}]});
    });
});