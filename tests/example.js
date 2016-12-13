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
        expect(polishHolidays.easterSunday(2017)).toEqual({ day: 16, month: 4, year: 2017, description: 'Easter' });
    });    
    it('polishHolidays.easterSunday(2016) should return easter date', function() {
        expect(polishHolidays.easterSunday(2016)).toEqual({ day: 27, month: 3, year: 2016, description: 'Easter' });
    }); 
    // it('polishHolidays.easterSunday(-1) should return invalid year exception', function() {
    //     expect(polishHolidays.easterSunday(-1)).toThrow();
    // });
});