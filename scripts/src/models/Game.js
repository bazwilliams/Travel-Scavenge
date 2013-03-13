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
            var shuffledTiles, requestedTags;
            requestedTags = this.get('config').get('tags');
            shuffledTiles = _.shuffle(this.get('tiles')).filter(function (tile) {
                return _.intersection(tile.tags, requestedTags).length > 0;
            });
            this.tileSet.reset(_.first(shuffledTiles, this.get('config').tilesRequired()));
        }
    });
});