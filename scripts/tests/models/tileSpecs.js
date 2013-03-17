/*global define, it, beforeEach, describe, spyOn, expect*/
define([
    'models/Tile'
], function (Tile) {
    "use strict";
    describe('Tile', function () {
        var tile;

        beforeEach(function () {
            tile = new Tile({
                description: 'test tile'
            });
        });

        it('selected should be false', function () {
            expect(tile.get('selected')).toBe(false);
        });
    });
});