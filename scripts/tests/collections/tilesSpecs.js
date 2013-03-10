/*global define, it, beforeEach, describe, spyOn, expect*/
define([
    'collections/Tiles'
], function (Tiles) {
    "use strict";
    describe('Tiles', function () {
        var collection;

        beforeEach(function () {
            collection = new Tiles([
                {
                    description: 'one',
                    selected: true
                },
                {
                    description: 'two',
                    selected: false
                },
                {
                    description: 'three',
                    selected: true
                }
            ]);
        });

        it('Score should be 2', function () {
            expect(collection.getScore()).toBe(2);
        });
    });
});