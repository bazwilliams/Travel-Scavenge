define([
    'underscore',
    'backbone',
    'collections/Tiles'
], function (_, Backbone, Tiles) {
    "use strict";
    return Backbone.Model.extend({
        initialize: function () {
            this.tileSet = new Tiles();
            this.populateTileSet();
            this.get('config').on('change', this.populateTileSet, this);
        },

        getActiveTileSet: function () {
            return this.tileSet;
        },

        populateTileSet: function () {
            var newTiles, requestedTags;
            requestedTags = this.get('config').getRequestedTags();
            newTiles = _.first(_.shuffle(this.get('gameTiles')).filter(function (tile) {
                return _.intersection(tile.tags, requestedTags).length > 0;
            }), this.get('config').tilesRequired());
            this.tileSet.each(function (model) {
                model.destroy();
            });
            this.tileSet.reset(newTiles);
        }
    });
});