define([
    'underscore',
    'backbone',
    'collections/Tiles'
], function (_, Backbone, Tiles) {
    "use strict";
    return Backbone.Model.extend({
        initialize: function () {
            this.tileSet = new Tiles();
            this.tileSet.fetch();
            if (this.tileSet.size() === 0) {
                this.populateTileSet();
            }
            this.get('config').on('change', this.populateTileSet, this);
        },

        getActiveTileSet: function () {
            return this.tileSet;
        },

        populateTileSet: function () {
            var newTiles, requestedTags, tileSet, modelToBeDestroyed;
            tileSet = this.tileSet;
            requestedTags = this.get('config').getRequestedTags();
            newTiles = _.shuffle(this.get('gameTiles')).filter(function (tile) {
                return _.intersection(tile.tags, requestedTags).length > 0;
            });
            while (modelToBeDestroyed = tileSet.pop()) {
                modelToBeDestroyed.destroy();
            }
            _.first(newTiles, this.get('config').tilesRequired()).forEach(function (newTile) {
                tileSet.add(newTile);
            });
            tileSet.trigger('reset');
        }
    });
});