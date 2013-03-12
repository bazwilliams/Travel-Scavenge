define([
    'underscore',
    'backbone',
    'collections/Tiles'
], function (_, Backbone, Tiles) {
    "use strict";
    return Backbone.Model.extend({
        getTileSet: function (tiles) {
            var shuffledTiles, requestedTags;
            requestedTags = this.get('config').get('tags');
            shuffledTiles = _.shuffle(tiles).filter(function (tile) {
                return _.intersection(tile.tags, requestedTags).length > 0;
            });
            return new Tiles(shuffledTiles);
        }
    });
});