/*global define, it, beforeEach, describe, spyOn, expect*/
define(['collections/Tiles',
        'views/TilesView'
], function (Tiles, TilesView) {
    describe('TilesView', function () {
        var el, collection, view;

        beforeEach(function () {
            el = $('<div>');
            collection = new Tiles({ description: 'test' });
            view = new TilesView({
                el: el,
                collection: collection
            });
            view.render();
        });

        it('Should not add a game-complete class', function () {
            expect(el.find('.game-complete').size()).toBe(0);
        });

        it('Should add a game-complete class when score reaches the number of tiles in collection', function () {
            collection.at(0).set('selected', true);
            expect(el.find('.game-complete').size()).toBe(1);
        });
    });
});