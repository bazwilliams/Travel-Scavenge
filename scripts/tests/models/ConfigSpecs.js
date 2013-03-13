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

        it('Correctly adds new tags', function () {
            sut.addTag('addTest');
            expect(tags.get('addTest').get('selected')).toBe(true);
        });

        it('Correctly sets existing tags when adding', function () {
            sut.addTag('tag1');
            expect(tags.get('tag1').get('selected')).toBe(true);
        });

        it('Correctly deselects existing tags', function () {
            sut.addTag('test');
            sut.removeTag('test');
            expect(tags.get('test').get('selected')).toBe(false);
        });

        it('Correctly adds new tags setting unselected when removing tag from game', function () {
            sut.removeTag('removeTest');
            expect(tags.get('removeTest').get('selected')).toBe(false);
        });

        it('Correctly specifies how many tiles are required', function () {
            expect(sut.tilesRequired()).toBe(8);
        });
    });
});