/*global define*/
define([
    'jquery',
    'backbone',
    'data',
    'views/TilesView',
    'collections/Tiles',
    'extensions',
    'bootstrap'
], function ($, Backbone, data, TilesView, Tiles) {
    "use strict";
    var initialize = function () {
        var tilesView = new TilesView({
            collection: new Tiles(data.getTiles())
        });
        tilesView.render();
        $(document).find('section').append(tilesView.el);
    };

    return {
        initialize: initialize
    }
});