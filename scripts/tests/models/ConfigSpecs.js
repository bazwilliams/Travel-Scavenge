/*global define, it, toBe, beforeEach, describe, spyOn, expect*/
define([
    'underscore',
    'models/Config',
    'collections/Tags'
], function (_, Config, Tags) {
    "use strict";
    describe('Config', function () {
        var sut, tags;

        beforeEach(function () {
            tags = new Tags([{id: 'tag1'}, {id: 'tag2'}, {id: 'tag3'}, {id: 'tag4'}]);
            sut = new Config({
                tags: tags
            });
        });

        it('Has default value for gameSize', function () {
            expect(sut.get('gameWidth')).toBe(2);
            expect(sut.get('gameHeight')).toBe(4);
        });

        it('Has default value for tags', function () {
            sut.get('tags').each(function (tag) {
                expect(tag.get('selected')).toBe(false);
            });
        });

        it('Correctly adds tags', function () {
            sut.addTag('addTest');
            expect(tags.get('addTest').get('selected')).toBe(true);
        });

        it('Correctly removes tags', function () {
            sut.addTag('test');
            sut.addTag('banana');
            sut.removeTag('test');
            expect(tags.get('addTest')).toBe(undefined);
        });

        it('Correctly specifies how many tiles are required', function () {
            expect(sut.tilesRequired()).toBe(8);
        });
    });
});