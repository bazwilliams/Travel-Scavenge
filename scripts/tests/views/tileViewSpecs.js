/*global define, it, beforeEach, describe, spyOn, expect*/
define([
    'models/Tile',
    'views/TileView'
], function (Tile, TileView) {
    "use strict";
    describe('TileView', function () {
        var el, model, view;

        beforeEach(function () {
            el = $('<div>');
            model = new Tile(
                { description: 'test tile' }
            );
            view = new TileView({
                el: el,
                model: model
            });
            view.render();
        });

        it('Model selected property should be true when tile is clicked', function () {
            el.find('.tile').click();
            expect(model.get('selected')).toBe(true);
        });

        it('Model selected property should be false when tile is clicked twice', function () {
            el.find('.tile').click();
            el.find('.tile').click();
            expect(model.get('selected')).toBe(false);
        });

        it('Should remove selected class when model is not selected', function () {
            model.set('selected', false);
            view.render();
            expect(el.find('.selected').size()).toBe(0);
        });

        it('Should add selected class when model is selected', function () {
            model.set('selected', true);
            view.render();
            expect(el.find('.selected').size()).toBe(1);
        });
    });
});