/*global define*/
define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    "use strict";
    var Tile = Backbone.Model.extend({
        defaults: {
            selected: false
        }
    });
    return Tile;
});