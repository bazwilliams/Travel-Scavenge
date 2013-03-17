/*global define, it, beforeEach, describe, spyOn, expect*/
define([
    'collections/Tiles'
], function (Tiles) {
    "use strict";
    describe('Tiles', function () {
        var sut;

        beforeEach(function () {
            sut = new Tiles([
                {
                    id: 'one',
                    selected: true
                },
                {
                    id: 'two',
                    selected: false
                },
                {
                    id: 'three',
                    selected: true
                }
            ]);
        });

        it('score should be 2', function () {
            expect(sut.getScore()).toBe(2);
        });
    });
});