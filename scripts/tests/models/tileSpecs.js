/*global define, it, beforeEach, describe, spyOn, expect*/
define([
    'models/Tile'
], function (Tile) {
    "use strict";
    describe('Tile', function () {
        var sut;

        beforeEach(function () {
            sut = new Tile({
                description: 'test tile'
            });
            spyOn(sut, 'save');
        });

        it('selected should be false', function () {
            expect(sut.get('selected')).toBe(false);
        });

        it('should call save on add', function () {
            sut.trigger('add');
            expect(sut.save).toHaveBeenCalled();
        });

        it('should call save on change', function () {
            sut.trigger('change');
            expect(sut.save).toHaveBeenCalled();
        });
    });
});