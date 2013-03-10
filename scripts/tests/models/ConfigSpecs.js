/*global define, it, toBe, beforeEach, describe, spyOn, expect*/
define([
    'models/Config'
], function (Config) {
    "use strict";
    describe('Config', function () {
        var model;

        beforeEach(function () {
            model = new Config();
        });

        it('Has default value for gameSize', function () {
            expect(model.get('gameWidth')).toBe(2);
            expect(model.get('gameHeight')).toBe(4);
        });

        it('Has default value for tags', function () {
            expect(model.get('tags').length).toBe(0);
        });

        it('Correctly adds tags', function () {
            model.addTag('addTest');
            expect(model.get('tags')[0]).toBe('addTest');
        });

        it('Correctly removes tags', function () {
            model.addTag('test');
            model.addTag('banana');
            model.removeTag('test');
            expect(model.get('tags')[0]).toBe('banana');
        });

        it('Correctly specifies how many tiles are required', function () {
            expect(model.tilesRequired()).toBe(8);
        });
    });
});