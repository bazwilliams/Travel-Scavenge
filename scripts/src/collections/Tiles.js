/*global define*/
define([
    'jquery',
    'backbone',
    'models/Tile',
    'localstorage'
], function ($, Backbone, Tile) {
    "use strict";
    var Tiles = Backbone.Collection.extend({

        localStorage: new Backbone.LocalStorage("Tiles"),

        model: Tile,

        getScore: function () {
            var score = 0;
            this.each(function (model) {
                score += (model.get('selected')) ? 1 : 0;
            });
            return score;
        }
    });
    return Tiles;
});