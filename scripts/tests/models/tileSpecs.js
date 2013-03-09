/*global define, it, beforeEach, describe, spyOn, expect*/
define(['models/Tile'
], function (Tile) {
    describe('Tile', function () {
        var tile;

        beforeEach(function () {
            tile = new Tile({
                description: 'test tile'
            });
        });

        it('Selected should be false', function () {
            expect(tile.get('selected')).toBe(false);
        });
    });
});