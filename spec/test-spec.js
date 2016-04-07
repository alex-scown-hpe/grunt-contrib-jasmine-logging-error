describe('A spec with no expectations', function() {

    it('should return 1', function() {
        var a = code();
    });

    it('should never reach this spec due to the error', function() {
        expect(code()).toBe(1);
    });

});
