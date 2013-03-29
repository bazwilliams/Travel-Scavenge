/*global define, it, beforeEach, describe, spyOn, expect*/
define([
    'jquery',
    'views/NavBarView'
], function ($, NavBarView) {
    "use strict";
    describe('NavBarView', function () {
        var sut, el, config;

        beforeEach(function () {
            el = $('<div>');
            config = {
                toJSON: function () {
                    return {
                        gameHeight: 2,
                        gameWidth: 2
                    }
                }
            };
            sut = new NavBarView({
                el: el,
                model: config
            });
            sut.render();
        });

        it('should be contained within a .navbar class', function () {
            expect(el.find('.navbar').size()).toBe(1);
        });

        it('should display a new game button', function () {
            expect(el.find('.new-button').size()).toBe(1);
        });

        it('should display a configuration button', function () {
            expect(el.find('.config-button').size()).toBe(1);
        });

        xit('should invoke configure() when button clicked', function () {
            spyOn(sut, 'showConfig');
            el.find('.config-button').click();
            expect(sut.showConfig).toHaveBeenCalled();
        });
    });
});