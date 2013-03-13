/*global define, it, beforeEach, describe, spyOn, expect*/
define([
    'jquery',
    'models/Config',
    'views/ConfigView'
], function ($, Config, ConfigView) {
    "use strict";
    describe('ConfigView', function () {
        var config, el, sut;

        beforeEach(function () {
            el = $('<div>');
            config = new Config({
                gameWidth: 4,
                gameHeight: 2,
                tags: []
            });
            ['tag1', 'tag2', 'tag3', 'tag4'].forEach(function (tagName) {
                config.addTag(tagName);
            });
            sut = new ConfigView({
                el: el,
                model: config
            });
            sut.render();
        });

        it('should prepopulate game width on form', function () {
            expect(el.find('#game-width').val()).toBe('4');
        });

        it('should prepopulate game height on form', function () {
            expect(el.find('#game-height').val()).toBe('2');
        });

        it('should update game width when form value changed', function () {
            el.find('#game-width').val('3').change();
            el.find('#game-config').submit();
            expect(config.get('gameWidth')).toBe(3);
        });

        it('should update game height when form value changed', function () {
            el.find('#game-height').val('3').change();
            el.find('#game-config').submit();
            expect(config.get('gameHeight')).toBe(3);
        });

        it('should fail gracefully if text is entered into width field', function () {
            el.find('#game-width').val('abc').change();
            el.find('#game-config').submit();
            expect(config.get('gameWidth')).toBe(4);
        });

        it('should fail gracefully if text is entered into height field', function () {
            el.find('#game-height').val('abc').change();
            el.find('#game-config').submit();
            expect(config.get('gameHeight')).toBe(2);
        });

        it('should render a list of toggleable tags to configure the game', function () {
            expect(el.find('.game-tag').size()).toBe(4);
        });

        it('should display tag id', function () {
            expect(el.find('.game-tag').text()).toContain('tag3');
        });
    });
});