/*global define, it, toBe, beforeEach, describe, spyOn, expect*/
define([
    'underscore',
    'models/Config'
], function (_, Config) {
    "use strict";
    describe('Config', function () {
        var sut, tags;

        beforeEach(function () {
            tags = [
                {
                    id: 'tag1',
                    selected: false
                },
                {
                    id: 'tag2',
                    selected: false
                },
                {
                    id: 'tag3',
                    selected: false
                },
                {
                    id: 'tag4',
                    selected: false
                }
            ];
            sut = new Config({
                tags: tags
            });
        });

        it('Has default value for gameSize', function () {
            expect(sut.get('gameWidth')).toBe(2);
            expect(sut.get('gameHeight')).toBe(4);
        });

        it('Correctly adds new tags', function () {
            sut.addTag('addTest');
            expect(_.findWhere(tags, {id: 'addTest'}).selected).toBe(true);
        });

        it('Correctly sets existing tags when adding', function () {
            sut.addTag('tag1');
            expect(_.findWhere(tags, {id: 'tag1'}).selected).toBe(true);
        });

        it('Correctly deselects existing tags', function () {
            sut.addTag('test');
            sut.removeTag('test');
            expect(_.findWhere(tags, {id: 'test'}).selected).toBe(false);
        });

        it('Correctly adds new tags setting unselected when removing tag from game', function () {
            sut.removeTag('removeTest');
            expect(_.findWhere(tags, {id: 'removeTest'}).selected).toBe(false);
        });

        it('Correctly specifies how many tiles are required', function () {
            expect(sut.tilesRequired()).toBe(8);
        });

        it('Correctly specifies the selected tags', function () {
            sut.addTag('tag3');
            expect(sut.getRequestedTags().length).toBe(1);
            expect(sut.getRequestedTags()[0]).toBe('tag3');
        });
    });
});