describe('grunt-contrib-jasmine', function() {

    it('should not crash on this spec', function() {
        var a = code();
    });

    it('will never reach this spec due to the error', function() {
        expect(code()).toBe(1);
    });

});
