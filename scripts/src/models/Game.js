define([
    'underscore',
    'backbone',
    'collections/Tiles'
], function (_, Backbone, Tiles) {
    "use strict";
    return Backbone.Model.extend({
        getTileSet: function (tiles) {
            var shuffledTiles;
            shuffledTiles = _.shuffle(tiles);
            return new Tiles(shuffledTiles.slice(0, this.get('config').tilesRequired()));
        }
    });
});