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
            shuffledTiles = _.filter(_.shuffle(tiles), function (tile) {
                return _.intersection(tile.tags, requestedTags).length >= requestedTags.length;
            });

            return new Tiles(shuffledTiles.slice(0, this.get('config').tilesRequired()));
        }
    });
});